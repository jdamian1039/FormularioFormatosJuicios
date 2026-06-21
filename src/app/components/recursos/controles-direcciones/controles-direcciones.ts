import { Component, signal, inject, Input, OnInit } from '@angular/core';
import { CatEstado } from '../../interfaces/estado.interface';
import { ApiConexion } from '../../../services/api-conexion';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-controles-direcciones',
  imports: [ReactiveFormsModule],
  templateUrl: './controles-direcciones.html',
  styleUrl: './controles-direcciones.css',
})
export class ControlesDirecciones implements OnInit {

  @Input() direccionForm!: FormGroup

  estadosResponse = signal<CatEstado[]>([])
  
  ngOnInit() {
    this.obtenerEstado()
  }
  private api = inject(ApiConexion)
  
  obtenerEstado(): void {
    this.api.getInfo('/CatEstados').subscribe({
      next: (response) => {
        this.estadosResponse.set(response)    
        console.log(response);  
        console.log(this.estadosResponse()[0].id + ' - ' + this.estadosResponse()[0].nombreEstado);  
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }

}
