import { Component, Input, OnInit, signal, input } from '@angular/core';
import {ReactiveFormsModule, FormGroup, FormArray, Validators, FormControl} from '@angular/forms';
import { Persona } from '../../interfaces/persona.interfaces';
import { ControlesPersonas } from '../../recursos/controles-personas/controles-personas';
import { ControlesDirecciones } from '../../recursos/controles-direcciones/controles-direcciones';
import { Direccion } from '../../interfaces/steps';

@Component({
  selector: 'app-testigos',
  imports: [ReactiveFormsModule, ControlesPersonas, ControlesDirecciones],
  templateUrl: './testigos.html',
  styleUrl: './testigos.css',
})
export class Testigos implements OnInit {
  @Input() step10Form!: FormGroup
  idDocumento = input.required<number>()
  testigos!: FormArray;
  direcciones!: FormArray;
  relaciones!: FormArray;

  ngOnInit() {
    this.testigos = this.step10Form.get('testigos') as FormArray;
    this.direcciones = this.step10Form.get('direcciones') as FormArray;
    this.relaciones = this.step10Form.get('relaciones') as FormArray;
    this.testigos.valueChanges.subscribe(val => {
      this.personas.set(val)
    })
    this.testigos.valueChanges.subscribe(val => {
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

  direccionesLista = signal<Direccion[]>([
    {
      calle: '',
      barrio: '',
      localidad: '',
      municipio: '',
      distrito: false,
      estado: ''
    }
  ])

  getTestigosFormGroup(index: number): FormGroup {
    return this.testigos.at(index) as FormGroup;
  }

  getDireccionesFormGroup(index: number): FormGroup {
    return this.direcciones.at(index) as FormGroup;
  }

  agregarDatosTestigo(){
    var valT = this.testigos.value
    var longT = this.testigos.length - 1
    if(this.idDocumento() === 7){

      if(valT[longT].nombre !== '' && valT[longT].paterno !== '' && valT[longT].materno !== '' && valT[longT].sexo !== ''){
        const nuevoTestigo = new FormGroup({
          nombre: new FormControl('', Validators.required),
          paterno: new FormControl('', Validators.required),
          materno: new FormControl('', Validators.required),
          sexo: new FormControl('', Validators.required),
          casado: new FormControl(false)
        })
        const nuevaRelacion = new FormGroup({
          tiempoConocimiento: new FormControl(0)
        })
        this.testigos.push(nuevoTestigo);
        this.relaciones.push(nuevaRelacion);
      }
    }
    else{
      if(valT[longT].nombre !== '' && valT[longT].paterno !== '' && valT[longT].materno !== '' && valT[longT].sexo !== ''){
        const nuevoTestigo = new FormGroup({
            nombre: new FormControl('', Validators.required),
            paterno: new FormControl('', Validators.required),
            materno: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
            casado: new FormControl(false)
          })
        const nuevaDireccion = new FormGroup({
            calle: new FormControl(''),
            barrio: new FormControl(''),
            localidad: new FormControl(''),
            municipio: new FormControl(''),
            distrito: new FormControl(false),
            estado: new FormControl(''),
          })
        this.testigos.push(nuevoTestigo);
        this.direcciones.push(nuevaDireccion);
      }
    }
  }

  quitarDatosTestigo(){
    if(this.idDocumento() === 7){
      if (this.testigos.length > 1 && this.relaciones.length > 1) {
        this.testigos.removeAt(this.testigos.length - 1);
        this.relaciones.removeAt(this.relaciones.length - 1);
      }
    }
    else{

      if (this.testigos.length > 1 && this.direcciones.length > 1) {
        this.testigos.removeAt(this.testigos.length - 1);
        this.direcciones.removeAt(this.direcciones.length - 1);
      }
    }
  }
}
  