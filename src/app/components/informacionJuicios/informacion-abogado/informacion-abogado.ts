import { Component, signal, Input, OnInit, input } from '@angular/core';
import { ControlesAbogado } from '../../recursos/controles-abogado/controles-abogado';
import { Abogado } from '../../interfaces/abogado.interface';
import { FormGroup, FormArray, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  selector: 'app-informacion-abogado',
  imports: [ControlesAbogado, ReactiveFormsModule],
  templateUrl: './informacion-abogado.html',
  styleUrl: './informacion-abogado.css',
})
export class InformacionAbogado implements OnInit {
  
  @Input() step5Form!: FormGroup
  idDocumento = input.required<number>()
  abogado!: FormArray;

  abogadosS = signal<Abogado[]>(
    [
      {
        id : 1,
        nombreAbogado : '',
        aPaternoAbogado: '',
        aMaternoAbogado: '',
        cedula:'',
        titulo:'',
        sexoAbogado:''
      }
    ])

  ngOnInit() {
    this.abogado = this.step5Form.get('abogados') as FormArray
    this.abogado.valueChanges.subscribe(val => {
      this.abogadosS.set(val)
    })
  }

  getAbogadosFormGroup(index: number): FormGroup {
    return this.abogado.at(index) as FormGroup;
  }

  recibirNombre(nombre: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, nombreAbogado: nombre}: p))
    console.table(this.abogadosS())
  }
  recibirApellidoPaterno(apellido: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, aPaternoAbogado: apellido}: p))
    console.table(this.abogadosS())
  }
  recibirApellidoMaterno(apellido: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, aMaternoAbogado: apellido}: p))
    console.table(this.abogadosS())
  }
  recibirCedula(cedula: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, cedula: cedula}: p))
    console.table(this.abogadosS())
  }
  recibirTitulo(titulo: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, titulo: titulo}: p))
    console.table(this.abogadosS())
  }
  recibirSexo(sexo: string, id: number){
    this.abogadosS.update(abogados => abogados.map((p) => p.id == id ? {...p, sexoAbogado: sexo}: p))
    console.table(this.abogadosS())
  }
  
  agregarPersona(){
    //console.log(this.abogados().length)
    //console.log(this.abogados())
    //if(this.abogados()[this.abogados().length-1].nombreAbogado == '' || this.abogados()[this.abogados().length-1].aPaternoAbogado == '' ||
    //  this.abogados()[this.abogados().length-1].aMaternoAbogado == '' || this.abogados()[this.abogados().length-1].cedula == '' ||
    //  this.abogados()[this.abogados().length-1].titulo == '' || this.abogados()[this.abogados().length-1].sexoAbogado == ''){
    //  return;
    //}
    //else{
    //  const nuevoAbogado: Abogado = {
    //    id: this.abogados().length + 1,
    //    nombreAbogado: '',
    //    aPaternoAbogado: '',
    //    aMaternoAbogado:'',
    //    sexoAbogado:'',
    //    cedula:'',
    //    titulo:''
    //  }
    //  this.abogados.update((list) => [...list, nuevoAbogado])
    //}
    var longitud = this.abogado.length - 1
    if(this.abogado.value[longitud].nombre !== '' || this.abogado.value[longitud].paterno !== '' ||
      this.abogado.value[longitud].materno !== '' || this.abogado.value[longitud].cedula !== '' ||
      this.abogado.value[longitud].titulo !== '' || this.abogado.value[longitud].sexo !== ''){
        const nuevoAbogado = new FormGroup({
          nombre: new FormControl('', Validators.required),
          paterno: new FormControl('', Validators.required),
          materno: new FormControl('', Validators.required),
          cedula: new FormControl('', Validators.required),
          titulo: new FormControl('', Validators.required),
          sexo: new FormControl('', Validators.required)
        });
        this.abogado.push(nuevoAbogado);
    }
  }
  quitarPersona(){
    //if(this.abogados().length === 1){
    //  console.log(this.abogados().length)
    //  return;
    //}
    //else{
    //  const nuevoArreglo = this.abogados()
    //  nuevoArreglo.splice(this.abogados().length - 1, 1)
    //  this.abogados.set(nuevoArreglo)
    //}
    if (this.abogado.length > 1) {
      this.abogado.removeAt(this.abogado.length - 1);
    }
  }
}
