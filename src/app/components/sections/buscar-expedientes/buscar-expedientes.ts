import { Component, inject, input, signal } from '@angular/core';
import { ApiConexion } from '../../../services/api-conexion';

@Component({
  selector: 'app-buscar-expedientes',
  imports: [],
  templateUrl: './buscar-expedientes.html',
  styleUrl: './buscar-expedientes.css',
})

export class BuscarExpedientes {
  documentos = signal<DocumentosExpediente[]>([])

  idJuicio = signal<number>(0)
  Code =signal<number>(0)


  api = inject(ApiConexion)
  buscarExpediente() {
    this.api.getInfo('/DocumentosGenerados/Juicio/'+ this.idJuicio() ).subscribe({
      next:(response) => {
        console.log(response)
        this.Code.set(200)
        this.documentos.set(response)
      },
      error: (err) => {
        this.Code.set(err.error.status);
        console.error('Error en llamada:', err);
        console.error('Error en llamada:', err.message);
        console.error('Error en llamada:', err.error.status);
      },
    })
  }

  

  sendData(event: Event){
    const input = event.target as HTMLInputElement;
    this.idJuicio.set(input.valueAsNumber);
  }
}

export interface DocumentosExpediente {
  id: number,
  nombreDocumento: string,
  fechaCreacion: Date,
  dia: string,
  hora: string,
  url: string,
}

