import { Component, Input, signal, input } from '@angular/core';
import { Colindancia } from '../../interfaces/colindancia.interface';
import { AdministradorColindancias } from '../../recursos/administrador-colindancias/administrador-colindancias';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-colindancia-inmueble',
  imports: [AdministradorColindancias, ReactiveFormsModule],
  templateUrl: './colindancia-inmueble.html',
  styleUrl: './colindancia-inmueble.css',
})
export class ColindanciaInmueble {
  
  @Input() step7Form!: FormGroup
  idDocumento = input.required<number>()

  get colindanciaNorteGroup() { return this.step7Form.get('colindanciasNorte') as FormGroup; }
  get colindanciaSurGroup() { return this.step7Form.get('colindanciasSur') as FormGroup; }
  get colindanciaEsteGroup() { return this.step7Form.get('colindanciasEste') as FormGroup; }
  get colindanciaOesteGroup() { return this.step7Form.get('colindanciasOeste') as FormGroup; }

  colindanciasNorte = signal<Colindancia[]>([])
  colindanciasSur = signal<Colindancia[]>([])
  colindanciasEste = signal<Colindancia[]>([])
  colindanciasOeste = signal<Colindancia[]>([])

  recibirColindanciaN(colindancia: Colindancia[]){
    this.colindanciasNorte.update(() => [...colindancia])
  }
  recibirColindanciaS(colindancia: Colindancia[]){
    this.colindanciasSur.update(() => [...colindancia])
  }
  recibirColindanciaE(colindancia: Colindancia[]){
    this.colindanciasEste.update(() => [...colindancia])
  }
  recibirColindanciaO(colindancia: Colindancia[]){
    this.colindanciasOeste.update(() => [...colindancia])
  }
}
