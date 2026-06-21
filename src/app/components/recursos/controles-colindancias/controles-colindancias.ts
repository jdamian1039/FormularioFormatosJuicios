import { Component, signal, output, input, Input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-controles-colindancias',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-colindancias.html',
  styleUrl: './controles-colindancias.css',
})
export class ControlesColindancias {

  @Input() formGroup!: FormGroup
  
  public medida = signal<number>(0.0)
  public colindante = signal<string>('')
  public nuevoColindante = signal<string>('')
  mostrarCampo : boolean = false

  numeroColindancia = input.required<number>()
  medidaSignal = output<number>()
  colindanteSignal = output<string>()
  nuevoColindanteSignal = output<string>()

  toggleMostrar(event: any) {
    this.mostrarCampo = event.target.checked;
  }

  enviarColindancia(): void {
    this.medidaSignal.emit(this.medida())
    this.colindanteSignal.emit(this.colindante())
    this.nuevoColindanteSignal.emit(this.nuevoColindante())
    
  }
}
