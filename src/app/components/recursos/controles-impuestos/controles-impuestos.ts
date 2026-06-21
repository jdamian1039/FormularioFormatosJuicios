import { Component, output, signal, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controles-impuestos',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-impuestos.html',
  styleUrl: './controles-impuestos.css',
})
export class ControlesImpuestos {

  @Input() formGroup!: FormGroup

  nombreImpuesto = signal<string>('Default')
  valorImpuesto = signal<string>('Default')

  nombreSignal = output<string>()
  valorSignal = output<string>()

  enviarImpuesto(): void {
    this.nombreSignal.emit(this.nombreImpuesto())
    this.valorSignal.emit(this.valorImpuesto())
    console.log('se emiten ambos valores')
  }
}
