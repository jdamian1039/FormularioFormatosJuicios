import { Component, signal, Input, OnInit, output, input } from '@angular/core';
import { ControlesPersonas } from '../../recursos/controles-personas/controles-personas';
import { ControlesDirecciones } from '../../recursos/controles-direcciones/controles-direcciones';
import { Persona } from '../../interfaces/persona.interfaces';
import { FormGroup, FormArray, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {DemandadosInterface} from '../../interfaces/steps';


@Component({
  selector: 'app-demandados',
  imports: [ControlesPersonas, ControlesDirecciones, ReactiveFormsModule],
  templateUrl: './demandados.html',
  styleUrl: './demandados.css',
})
export class Demandados implements OnInit {

  @Input() step4Form!: FormGroup
  demandados!: FormArray;
  opcionesDemandados = output<DemandadosInterface[]>()
  opcionesDemandadosEnvio = signal<DemandadosInterface[]>([])
  idDocumento = input.required<number>()

  ngOnInit() {
    this.demandados = this.step4Form.get('demandados') as FormArray
    this.demandados.valueChanges.subscribe(val => {
      this.personas.set(val)
    })
  }

  getDemandadoFormGroup(index: number): FormGroup {
    return this.demandados.at(index) as FormGroup;
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
  
  get direccionGroup() { return this.step4Form.get('direccion') as FormGroup; }
  
  recibirDatos(nombre: string, paterno: string, materno: string, sexo: string, id: number){
    
  }

  recibirNombrePersona(nombre: string, id: number){
    //this.personas.update(personas  => personas.map((p) => p.id === id ? {...p, nombre: nombre}: p))
    //const valor = (event.target as HTMLInputElement).value;
    //const control = this.demandados.at(id).get('nombre');
    //control?.setValue(valor);
  }
  recibirPaternoPersona(paterno: string, id:number){
    //this.personas.update(personas  => personas.map((p) => p.id === id ? {...p, apellidoPaterno: paterno}: p))
    //const valor = (event.target as HTMLInputElement).value;
    //const control = this.demandados.at(id).get('paterno');
    //control?.setValue(valor);
  }
recibirMaternoPersona(materno: string, id:number){
    //this.personas.update(personas  => personas.map((p) => p.id === id ? {...p, apellidoMaterno: materno}: p))
    //const valor = (event.target as HTMLInputElement).value;
    //const control = this.demandados.at(id).get('materno');
    //control?.setValue(valor);
  }
  recibirSexoPersona(sexo: string, id:number){
    //this.personas.update(personas  => personas.map((p) => p.id === id ? {...p, sexo: sexo}: p))
    //const valor = (event.target as HTMLInputElement).value;
    //const control = this.demandados.at(id).get('sexo');
    //control?.setValue(valor);
  }
  agregarPersona(){
    //console.log(this.personas().length)
    //console.log(this.personas())
    //if(this.personas()[this.personas().length-1].nombre == '' || this.personas()[this.personas().length-1].apellidoPaterno == '' || 
    //this.personas()[this.personas().length-1].apellidoMaterno == '' || this.personas()[this.personas().length-1].sexo == ''){
    //  return;
    //}
    //else{
    //  const nuevaPersona: Persona = {
    //    id: this.personas().length + 1,
    //    nombre: '',
    //    apellidoPaterno: '',
    //    apellidoMaterno: '',
    //    sexo: ''
    //  }
    //  this.personas.update((list) => [...list, nuevaPersona])
    //}
    var longitud = this.demandados.length - 1
    if(this.demandados.value[longitud].nombre !== '' || this.demandados.value[longitud].paterno !== '' || 
      this.demandados.value[longitud].materno !== '' || this.demandados.value[longitud].sexo !== ''){
      const nuevaPersona = new FormGroup({
        nombre: new FormControl('', Validators.required),
        paterno: new FormControl('', Validators.required),
        materno: new FormControl('', Validators.required),
        sexo: new FormControl('', Validators.required),
        casado: new FormControl(false)
      });
      this.demandados.push(nuevaPersona);
    }
    this.opcionesDemandados.emit(this.demandados.value)
  }
  
  quitarPersona(){
    //if(this.personas().length === 1){
    //  console.log(this.personas().length)
    //  return;
    //}
    //else{
    //  const nuevoArreglo = this.personas()
    //  nuevoArreglo.splice(this.personas().length - 1, 1)
    //  this.personas.set(nuevoArreglo)
    //}
    if (this.demandados.length > 1) {
      this.demandados.removeAt(this.demandados.length - 1);
    }
    this.opcionesDemandados.emit(this.demandados.value)
  }
}
