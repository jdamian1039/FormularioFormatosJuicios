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

  idDocumento = input.required<number>()
  
  public medida = signal<number>(0.0)
  public colindante = signal<string>('')
  public nuevoColindante = signal<string>('')
  mostrarCampoColindante : boolean = false
  mostrarCamposDomicilio : boolean = false

  numeroColindancia = input.required<number>()
  medidaSignal = output<number>()
  colindanteSignal = output<string>()
  nuevoColindanteSignal = output<string>()

  toggleMostrarNuevoColindante(event: any) {
    this.mostrarCampoColindante = event.target.checked;
  }

  toggleEsDomicilio(event: any) {
    this.mostrarCamposDomicilio = event.target.checked;
  }


  enviarColindancia(): void {
    this.medidaSignal.emit(this.medida())
    this.colindanteSignal.emit(this.colindante())
    this.nuevoColindanteSignal.emit(this.nuevoColindante())
    
  }
}
