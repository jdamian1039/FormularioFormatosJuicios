import { Component, Input } from '@angular/core';
import { ControlesDirecciones } from '../../recursos/controles-direcciones/controles-direcciones';
import { FormGroup, FormArray, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-direccion-inmueble',
  imports: [ControlesDirecciones, ReactiveFormsModule],
  templateUrl: './direccion-inmueble.html',
  styleUrl: './direccion-inmueble.css',
})
export class DireccionInmueble {
  @Input() step6Form!: FormGroup


  get direccionGroup() { return this.step6Form.get('direccion') as FormGroup; }




}
