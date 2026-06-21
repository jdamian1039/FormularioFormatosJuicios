import { Component, signal, inject, Input, input } from '@angular/core';
import { CatOficinaRegistral } from '../../interfaces/oficina.interface';
import { ApiConexion } from '../../../services/api-conexion';
import { ReactiveFormsModule, FormGroup, FormArray } from '@angular/forms';


@Component({
  selector: 'app-inscripcion-inmueble',
  imports: [ReactiveFormsModule],
  templateUrl: './inscripcion-inmueble.html',
  styleUrl: './inscripcion-inmueble.css',
})
export class InscripcionInmueble {
  @Input() step8Form!: FormGroup
  idDocumento = input.required<number>()

  oficinasRegResponse = signal<CatOficinaRegistral[]>([])

  ngOnInit():void {
    this.obtenerOficinaRegistral()
  }
  private api = inject(ApiConexion)
  
  obtenerOficinaRegistral(): void {
    this.api.getInfo('/CatOficinaRegistrals').subscribe({
      next: (response) => {
        this.oficinasRegResponse.set(response)    
        console.log(response);  
        console.log(this.oficinasRegResponse()[0].id + ' - ' + this.oficinasRegResponse()[0].nombreOficina);  
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }
}
