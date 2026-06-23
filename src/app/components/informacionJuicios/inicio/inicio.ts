import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiConexion } from '../../../services/api-conexion';
import { InformacionGeneralJuicios } from '../informacion-general-juicios/informacion-general-juicios';
import { Actores } from '../../informacionPersonas/actores/actores';
import { Demandados } from '../../informacionPersonas/demandados/demandados';
import { InformacionAbogado } from '../informacion-abogado/informacion-abogado';
import { DireccionInmueble } from '../../informacionInmueble/direccion-inmueble/direccion-inmueble';
import { ColindanciaInmueble } from '../../informacionInmueble/colindancia-inmueble/colindancia-inmueble';
import { InscripcionInmueble } from '../../informacionInmueble/inscripcion-inmueble/inscripcion-inmueble';
import { InformacionCompraventaInmueble } from '../informacion-compraventa-inmueble/informacion-compraventa-inmueble';
import {Testigos} from '../../informacionPersonas/testigos/testigos';
import { FormGroup, Validators, ReactiveFormsModule, FormArray, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormField } from "@angular/forms/signals";



@Component({
  selector: 'app-inicio',
  imports: [InformacionGeneralJuicios, Actores, Demandados, InformacionAbogado, DireccionInmueble, Testigos,
    ColindanciaInmueble, InscripcionInmueble, InformacionCompraventaInmueble, ReactiveFormsModule, JsonPipe, FormField],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

  actualStep: number = 1;
  datosFaltantes : boolean = false;

  mainForm = new FormGroup({
    step1: new FormGroup(
      {
        juicio : new FormControl('', Validators.required),
        expedienteInterno : new FormControl('', Validators.required),
        documento : new FormControl('', Validators.required)
      }
    ),
    step2: new FormGroup(
      {
        expediente : new FormControl(''),
        fechaReplica: new FormControl(''),
        distrito: new FormControl('', Validators.required)
      }
    ),
    step3: new FormGroup(
      {
        actores: new FormArray([ 
          new FormGroup({
            nombre : new FormControl('', Validators.required),
            paterno: new FormControl('', Validators.required),
            materno: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
            casado: new FormControl(false)
          })
        ])
      }
    ),
    step4: new FormGroup(
      {
        demandados: new FormArray([
          new FormGroup({
            nombre : new FormControl('', Validators.required),
            paterno: new FormControl('', Validators.required),
            materno: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
            casado: new FormControl(false)
          })
        ]),
        direccion: new FormGroup({
          calle: new FormControl('', Validators.required),
          barrio: new FormControl(''),
          localidad: new FormControl(''),
          municipio: new FormControl('', Validators.required),
          distrito: new FormControl(false),
          estado: new FormControl('', Validators.required),
        })
      }
    ),
    step5: new FormGroup(
      {
        abogados: new FormArray([
          new FormGroup({
            titulo: new FormControl('', Validators.required),
            nombre: new FormControl('', Validators.required),
            paterno: new FormControl('', Validators.required),
            materno: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
            cedula: new FormControl(''),
          })
        ])
      }
    ),
    step6: new FormGroup(
      {
        direccion: new FormGroup({
          calle: new FormControl('', Validators.required),
          barrio: new FormControl(''),
          localidad: new FormControl(''),
          municipio: new FormControl('', Validators.required),
          distrito: new FormControl(false),
          estado: new FormControl('', Validators.required),
        }),
        superficie: new FormControl(0, Validators.required),
        superficieLetrasMetros: new FormControl('', Validators.required),
        superficieLetrasCentimetros: new FormControl('', Validators.required),
      }
    ),
    step7: new FormGroup(
      {
        colindanciasNorte: new FormGroup({
          colindancias: new FormArray([
            new FormGroup({
              medida: new FormControl(0, Validators.required),
              colindante: new FormControl('', Validators.required),
              finado: new FormControl(false),
              nuevoColindante: new FormControl(''),
            })
          ])
        }),
        colindanciasSur: new FormGroup({
          colindancias: new FormArray([
            new FormGroup({
              medida: new FormControl(0, Validators.required),
              colindante: new FormControl('', Validators.required),
              finado: new FormControl(false),
              nuevoColindante: new FormControl(''),
            })
          ])
        }),
        colindanciasEste: new FormGroup({
          colindancias: new FormArray([
            new FormGroup({
              medida: new FormControl(0, Validators.required),
              colindante: new FormControl('', Validators.required),
              finado: new FormControl(false),
              nuevoColindante: new FormControl(''),
            })
          ])
        }),
        colindanciasOeste: new FormGroup({
          colindancias: new FormArray([
            new FormGroup({
              medida: new FormControl(0, Validators.required),
              colindante: new FormControl('', Validators.required),
              finado: new FormControl(false),
              nuevoColindante: new FormControl(''),
            })
          ])
        })
      }
    ),
    step8: new FormGroup(
      {
        oficina: new FormControl('', Validators.required),
        fechaInscripcion: new FormControl('', Validators.required),
        folioElectronico: new FormControl('', Validators.required),
        codemandadoDominio: new FormControl('', Validators.required),
        codemandadoCausante: new FormControl('', Validators.required),
        tildacion: new FormControl('', Validators.required)
      }
    ),
    step9: new FormGroup(
      {
        fechaCompraventa: new FormControl('', Validators.required),
        fechaPosesion: new FormControl('', Validators.required),
        precio: new FormControl(0, Validators.required),
        precioLetras: new FormControl('', Validators.required),
        centavos: new FormControl(0),
        localidad: new FormControl(''),
        municipio: new FormControl(''),
        impuestos: new FormArray([
          new FormGroup({
            impuesto: new FormControl('', Validators.required)
          })
        ])
      }
    ),
    step10: new FormGroup(
      {
        fechaAllanamiento: new FormControl('', Validators.required),
        testigos: new FormArray([
          new FormGroup({
            nombre: new FormControl('', Validators.required),
            paterno: new FormControl('', Validators.required),
            materno: new FormControl('', Validators.required),
            sexo: new FormControl('', Validators.required),
            casado: new FormControl(false)
          }),
        ]),
        direcciones: new FormArray([
          new FormGroup({
            calle: new FormControl('', Validators.required),
            barrio: new FormControl(''),
            localidad: new FormControl(''),
            municipio: new FormControl('', Validators.required),
            distrito: new FormControl(false),
            estado: new FormControl('', Validators.required),
          })
        ]) 
      }
    )
  })

  constructor(private router: Router){
    
  }

  get step1() { return this.mainForm.get('step1') as FormGroup; }
  get step2() { return this.mainForm.get('step2') as FormGroup; }
  get step3() { return this.mainForm.get('step3') as FormGroup; }
  get step4() { return this.mainForm.get('step4') as FormGroup; }
  get step5() { return this.mainForm.get('step5') as FormGroup; }
  get step6() { return this.mainForm.get('step6') as FormGroup; }
  get step7() { return this.mainForm.get('step7') as FormGroup; }
  get step8() { return this.mainForm.get('step8') as FormGroup; }
  get step9() { return this.mainForm.get('step9') as FormGroup; }
  get step10() { return this.mainForm.get('step10') as FormGroup; }

  nextStep(){
    //if(this.idJuicio() != 0 && this.nombreDocumento() != ''){
    //  this.actualStep +=1
    //}
    //const botonEnvio = document.getElementById('botonEnvio');
    if((this.documentoSelected().clave.length) + 5 === this.actualStep ){
      if (!this.mainForm.valid) { // Marca todos los campos como tocados para mostrar los errores
        this.datosFaltantes = true;
      }
      else{
        this.datosFaltantes = false;
        this.enviarDatos();
      }
    }
    else{
      this.actualStep +=1
    }
  }

  previousStep(){
    this.actualStep -=1
    console.log(this.actualStep)
  }


  //
  goRoute(){
    this.router.navigate(['/juicio_inicio']);
  }
  juiciosResponse = signal<CatJuicio[]>([]);
  documentosResponse = signal<CatDocumentos[]>([]);
  
  idJuicio = signal<number>(0)
  nombreDocumento = signal<string>('')
  idDocumento = signal<number>(0)
  documentoSelected = signal<CatDocumentos>({
    id: 0,
    nombreDocumento: '',
    valorCombo: '',
    rutaTemplate: '',
    idJuicio: 0,
    clave: ''
  })
  
  ngOnInit():void {
    this.obtenerDatosJuicios()
  }
  
  private api = inject(ApiConexion)
  
  obtenerDatosJuicios(): void {
    this.api.getInfo('/CatJuicios').subscribe({
      next: (response) => {
        this.juiciosResponse.set(response);
        console.log('Datos recibidos:', this.juiciosResponse());
        console.log('Datos recibidos:', this.juiciosResponse()[0].nombreJuicio);
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }

  obtenerDatosDocumentos(id:number): void {
    this.api.getInfo('/CatDocumentos/juicio/' + id).subscribe({
      next: (response) => {
        this.documentosResponse.set(response);
        console.log('Datos recibidos:', this.documentosResponse());
        console.log('Datos recibidos:', this.documentosResponse()[0].nombreDocumento);
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }

  enviarDatos(){
    this.api.postInfo('Expediente/procesar-documento', this.mainForm.value).subscribe({
      next: (response) => {
        console.log(response);
        console.log('URL de OneDrive:', response.url);
        console.log('Nombre del archivo:', response.resultado.fileDownloadName);
        console.log('Tipo de contenido:', response.resultado.contentType);
        console.log('Contenido del archivo (Base64):', response.resultado.fileContents);
        // 👈 REDIRECCIÓN MÁGICA: Nos movemos a la ruta '/resultado' pasándole los datos ocultos
        this.router.navigate(['/documento_exitoso'], {
          state: {
            url: response.url,                                      // El link de OneDrive
            fileContents: response.resultado.fileContents,          // El string Base64 del archivo
            name: response.resultado.fileDownloadName,              // El nombre original asignado en C#
            type: response.resultado.contentType                   // El tipo MIME (.docx)
          }
        });
      },
      error: (error) => {
        console.error('Error en la llamada:', error);
      }
    });
  }

  enviarId(juicio:CatJuicio){
    console.log(juicio)
    this.idJuicio.set(juicio.id)
    this.obtenerDatosDocumentos(this.idJuicio())
  }

  seleccionarDocumento(documento: CatDocumentos){
    this.documentoSelected.set(documento)
    this.idDocumento.set(documento.id)
    this.nombreDocumento.set(documento.nombreDocumento)
    console.log(documento)
  }

}
