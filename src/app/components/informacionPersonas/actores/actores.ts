import { Component, signal, Input, OnInit, input } from '@angular/core';
import { ControlesPersonas } from '../../recursos/controles-personas/controles-personas';
import { Persona } from '../../interfaces/persona.interfaces';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-actores',
  imports: [ControlesPersonas, ReactiveFormsModule],
  templateUrl: './actores.html',
  styleUrl: './actores.css',
})
export class Actores implements OnInit {
  
  @Input() step3Form!: FormGroup
  actores!: FormArray;
  iDocumento = input.required<number>()

  ngOnInit() {
    this.actores = this.step3Form.get('actores') as FormArray
    this.actores.valueChanges.subscribe(val => {
      this.personas.set(val)
    })
  }
  
  personas = signal<Persona[]>(
    [
      {
        id: 1, 
        nombre: '', 
        apellidoPaterno: '', 
        apellidoMaterno: '', 
        sexo: '' 
      }
    ]
  )
  
  getActoresFormGroup(index: number): FormGroup {
    return this.actores.at(index) as FormGroup;
  }

  recibirNombrePersona(nombre: string, id: number){
    this.personas.update(personas  => personas.map((p) => p.id == id ? {...p, nombre: nombre}: p))
  }
  recibirPaternoPersona(paterno: string, id:number){
    this.personas.update(personas  => personas.map((p) => p.id == id ? {...p, apellidoPaterno: paterno}: p))
  }
  recibirMaternoPersona(materno: string, id:number){
    this.personas.update(personas  => personas.map((p) => p.id == id ? {...p, apellidoMaterno: materno}: p))
  }
  recibirSexoPersona(sexo: string, id:number){
    this.personas.update(personas  => personas.map((p) => p.id == id ? {...p, sexo: sexo}: p))
  }
  
  agregarPersona(){
    var longitud = this.actores.length - 1
    if(this.actores.value[longitud].nombre !== '' || this.actores.value[longitud].paterno !== '' || 
      this.actores.value[longitud].materno !== '' || this.actores.value[longitud].sexo !== ''){
      const nuevaPersona = new FormGroup({
        nombre: new FormControl('', Validators.required),
        paterno: new FormControl('', Validators.required),
        materno: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        casado: new FormControl(false)
      });
      this.actores.push(nuevaPersona);
    }
  }

  quitarPersona(){
    if (this.actores.length > 1) {
      this.actores.removeAt(this.actores.length - 1);
    }
  }
}
