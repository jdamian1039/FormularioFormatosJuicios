import { Component, output, signal, Input, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';
import { ApiConexion } from '../../../services/api-conexion';
import { Impuesto } from '../../interfaces/impuesto.interface';

@Component({
  selector: 'app-controles-impuestos',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-impuestos.html',
  styleUrl: './controles-impuestos.css',
})
export class ControlesImpuestos implements OnInit {

  @Input() formGroup!: FormGroup
  private api = inject(ApiConexion)
  impuestosResponse = signal<Impuesto[]>([])

  nombreImpuesto = signal<string>('Default')
  valorImpuesto = signal<string>('Default')

  nombreSignal = output<string>()
  valorSignal = output<string>()


  ngOnInit() {
    this.obtenerImpuesto();
  }

  obtenerImpuesto(): void {
    this.api.getInfo('/CatImpuestosInmuebles').subscribe({
      next: (response) => {
        this.impuestosResponse.set(response);
        console.log(response);
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }
}
