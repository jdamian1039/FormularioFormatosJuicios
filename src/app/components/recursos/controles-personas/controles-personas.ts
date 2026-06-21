import { Component, signal, Input, output, OnInit, Output } from '@angular/core';
import { FormArray, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-controles-personas',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-personas.html',
  styleUrl: './controles-personas.css',
})
export class ControlesPersonas {

  @Input() formGroup!: FormGroup;

  nombreControl = output<string>();
  apellidoPaternoControl = output<string>();
  apellidoMaternoControl = output<string>();
  sexoControl = output<string>();

  sendData() {
    console.log(this.formGroup.value.nombre);
    console.log(this.formGroup.value.paterno);
    console.log(this.formGroup.value.materno);
    console.log(this.formGroup.value.sexo);
    this.nombreControl.emit(this.formGroup.value.nombre);
    this.apellidoPaternoControl.emit(this.formGroup.value.paterno);
    this.apellidoMaternoControl.emit(this.formGroup.value.materno);
    this.sexoControl.emit(this.formGroup.value.sexo);
  }

  //public nombre = signal<string>('')
  //public apellidoPaterno = signal<string>('')
  //public apellidoMaterno = signal<string>('')
  //public sexo = signal<string>('')

  //@Output() nombreSignal = new EventEmitter<any>()
  //@Output() apellidoPaternoSignal = new EventEmitter<any>()
  //@Output() apellidoMaternoSignal = new EventEmitter<any>()
  //@Output() sexoSignal = new EventEmitter<any>()
//
  //onNombreChange(event: Event) {
  //  const value = (event.target as HTMLInputElement).value;
  //  this.nombreSignal.emit(value);
  //}
  //
  //onPaternoChange(event: Event) {
  //  const value = (event.target as HTMLInputElement).value;
  //  this.apellidoPaternoSignal.emit(value);
  //}
  //
  //onMaternoChange(event: Event) {
  //  const value = (event.target as HTMLInputElement).value;
  //  this.apellidoMaternoSignal.emit(value);
  //}
  //
  //onSexoChange(event: Event) {
  //  const value = (event.target as HTMLSelectElement).value;
  //  this.sexoSignal.emit(value);
  //}
  
  //nombreSignal = output<string>()
  //apellidoPaternoSignal = output<string>()
  //apellidoMaternoSignal = output<string>()
  //sexoSignal = output<string>()

  //enviarNombrePersona(): void {
  //  console.log('se emite dato')
  //  this.nombreSignal.emit(this.nombre())
  //  this.apellidoPaternoSignal.emit(this.apellidoPaterno())
  //  this.apellidoMaternoSignal.emit(this.apellidoMaterno())
  //  this.sexoSignal.emit(this.sexo())
  //}
}
