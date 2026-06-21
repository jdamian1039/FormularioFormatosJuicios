import { Component, signal, Input, OnInit, input, inject } from '@angular/core';
import { ControlesImpuestos } from '../../recursos/controles-impuestos/controles-impuestos';
import { Impuesto } from '../../interfaces/impuesto.interface';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { CatEstado } from '../../interfaces/estado.interface';
import { ApiConexion } from '../../../services/api-conexion';

@Component({
  selector: 'app-informacion-compraventa-inmueble',
  imports: [ControlesImpuestos, ReactiveFormsModule],
  templateUrl: './informacion-compraventa-inmueble.html',
  styleUrl: './informacion-compraventa-inmueble.css',
})
export class InformacionCompraventaInmueble implements OnInit {

  @Input() step9Form!: FormGroup
  impuestosArray!: FormArray;
  tipoFormulario = input.required<string>()


  impuestos = signal<Impuesto[]>(
    [
      {
        id : 1,
        nombreImpuesto : '',
        valor: ''
      }
    ])

  ngOnInit() {
    this.impuestosArray = this.step9Form.get('impuestos') as FormArray
    this.impuestosArray.valueChanges.subscribe(val => {
      this.impuestos.set(val)
    })
  }  

  getImpuestoFormGroup(index: number): FormGroup {
    return this.impuestosArray.at(index) as FormGroup;
  }
  
  recibirNombreImpuesto(nombre: string, id: number){
    this.impuestos.update(impuestos  => impuestos.map((p) => p.id == id ? {...p, nombreImpuesto: nombre}: p))
    console.table(this.impuestos())
  }
  recibirValorImpuesto(valor: string, id:number){
    this.impuestos.update(impuestos  => impuestos.map((p) => p.id == id ? {...p, valor: valor}: p))
    console.table(this.impuestos())
  }
  
  agregarPersona(){
    //console.log(this.impuestos().length)
    //console.log(this.impuestos())
    //if(this.impuestos()[this.impuestos().length-1].nombreImpuesto == '' || this.impuestos()[this.impuestos().length-1].valor == ''){
    //  return;
    //}
    //else{
    //  const nuevoImpuesto: Impuesto = {
    //    id: this.impuestos().length + 1,
    //    nombreImpuesto: '',
    //    valor: ''
    //  }
    //  this.impuestos.update((list) => [...list, nuevoImpuesto])
    //}
    var longitud = this.impuestosArray.length - 1
    if(this.impuestosArray.value[longitud].impuesto !== ''){
      const nuevoImpuestoGroup = new FormGroup({
        impuesto: new FormControl('', Validators.required)
      });
      this.impuestosArray.push(nuevoImpuestoGroup)
    }
  }

  quitarPersona(){
    //if(this.impuestos().length === 1){
    //  console.log(this.impuestos().length)
    //  return;
    //}
    //else{
    //  const nuevoArreglo = this.impuestos()
    //  nuevoArreglo.splice(this.impuestos().length - 1, 1)
    //  this.impuestos.set(nuevoArreglo)
    //}
    if (this.impuestosArray.length > 1) {
      this.impuestosArray.removeAt(this.impuestosArray.length - 1);
    }
  }
}
