import { Component, signal, output, Input } from '@angular/core';
import { REACTIVE_NODE } from '@angular/core/primitives/signals';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormField } from "@angular/forms/signals";

@Component({
  selector: 'app-controles-abogado',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-abogado.html',
  styleUrl: './controles-abogado.css',
})
export class ControlesAbogado {
  @Input() formGroup!: FormGroup;
  //nombreAbogado = signal<string>('')
  //aPaternoAbogado = signal<string>('')
  //aMaternoAbogado = signal<string>('')
  //tituloAbogado = signal<string>('Licenciado')
  //cedula = signal<string>('')
  //sexo = signal<string>('')

  //nombreAbogadoSign = output<string>()
  //aPaternoAbogadoSign = output<string>()
  //aMaternoAbogadoSign = output<string>()
  //tituloAbogadoSign = output<string>()
  //cedulaSign = output<string>()
  //sexoSign = output<string>()

  //enviarInformacionAbogado(){
  //  this.nombreAbogadoSign.emit(this.nombreAbogado())
  //  this.aPaternoAbogadoSign.emit(this.aPaternoAbogado())
  //  this.aMaternoAbogadoSign.emit(this.aMaternoAbogado())
  //  this.tituloAbogadoSign.emit(this.tituloAbogado())
  //  this.cedulaSign.emit(this.cedula())
  //  this.sexoSign.emit(this.sexo())
  //}
}
