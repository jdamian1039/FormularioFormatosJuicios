import { Component, input, inject, signal, Input, OnInit } from '@angular/core';
import { ApiConexion } from '../../../services/api-conexion';
import { CatDistritoJudicial } from '../../interfaces/distritoJudicial.interface';
import { FormGroup,  ReactiveFormsModule} from '@angular/forms';


@Component({
  selector: 'app-informacion-general-juicios',
  imports: [ReactiveFormsModule],
  templateUrl: './informacion-general-juicios.html',
  styleUrl: './informacion-general-juicios.css',
})
export class InformacionGeneralJuicios implements OnInit{
  
  nombreDocumento = input.required<string>()
  idDocumento = input.required<number>()
  distritoResponse = signal<CatDistritoJudicial[]>([])
  distritoIndex = signal<CatDistritoJudicial>({
    id: 1,
    nombreDistrito:'',
    valorCombo:''
  })

  @Input() parentForm !: FormGroup
  step2Form!: FormGroup
  
  ngOnInit():void {
    this.obtenerDistritoJudicial()
    this.step2Form = this.parentForm.get('step2') as FormGroup
  }
  private api = inject(ApiConexion)
  
  obtenerDistritoJudicial(): void {
    this.api.getInfo('/DistritoJudicials').subscribe({
      next: (response) => {
        this.distritoResponse.set(response)    
        console.log(response);  
        console.log(this.distritoResponse()[0].id + ' - ' + this.distritoResponse()[0].nombreDistrito);  
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }

  setDistritoIndex(distrito: CatDistritoJudicial){
    this.distritoIndex.set(distrito);
    console.log(this.distritoIndex())
  }

}
