import { Component, signal, output, Input, OnInit } from '@angular/core';
import { ControlesColindancias } from '../controles-colindancias/controles-colindancias';
import { Colindancia } from '../../interfaces/colindancia.interface';
import { ReactiveFormsModule, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrador-colindancias',
  imports: [ControlesColindancias, ReactiveFormsModule],
  templateUrl: './administrador-colindancias.html',
  styleUrl: './administrador-colindancias.css',
})
export class AdministradorColindancias implements OnInit {

  @Input() colindanciaGroup!: FormGroup
  colindancia!: FormArray

  ngOnInit() {
    this.colindancia = this.colindanciaGroup.get('colindancias') as FormArray
    this.colindancia.valueChanges.subscribe(val => {
      this.colindancias.set(val)
    })
  }

  getColindanciaFormGroup(index: number): FormGroup {
    return this.colindancia.at(index) as FormGroup;
  }

  colindancias = signal<Colindancia[]>(
    [
      {
        id : 1,
        medida : 0.0,
        nombreColindante: '',
        esDomicilio: false,
        finado: false,
        nuevoColindante: ''
      }
    ]
  )


  envioColindancia = output<Colindancia[]>()

  enviarColindancia(){
    console.log('Se envio colindancia')
    console.log(this.colindancias())
    this.envioColindancia.emit(this.colindancias())
  }

  recibirMedidaColindancia(medida: number, id: number){
    this.colindancias.update(colindancias  => colindancias.map((c) => c.id == id ? {...c, medida: medida}: c))
  }
  recibirColindante(colindante: string, id:number){
    this.colindancias.update(colindancias  => colindancias.map((c) => c.id == id ? {...c, nombreColindante: colindante}: c))
  }
  recibirNuevoColindante(nuevoColindante: string, id:number){
    this.colindancias.update(colindancias  => colindancias.map((c) => c.id == id ? {...c, nuevoColindante: nuevoColindante}: c))
  }
  
  agregarColindancia(){
    
    var longitud = this.colindancia.length - 1
    if(this.colindancia.value[longitud].medida !== 0 || this.colindancia.value[longitud].colindante !== ''){
      const nuevaColindancia = new FormGroup({
        medida: new FormControl(0, Validators.required),
        colindante: new FormControl('', Validators.required),
        esDomicilio: new FormControl(false, Validators.required),
        primeraLineaDomicilio: new FormControl(''),
        finado: new FormControl(false),
        nuevoColindante: new FormControl('')
      });
      this.colindancia.push(nuevaColindancia);
    }
  }

  quitarColindancia(){
    
    if (this.colindancia.length > 1) {
      this.colindancia.removeAt(this.colindancia.length - 1);
    }
  }
}
