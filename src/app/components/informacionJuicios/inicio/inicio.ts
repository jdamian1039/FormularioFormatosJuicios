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
    ColindanciaInmueble, InscripcionInmueble, InformacionCompraventaInmueble, ReactiveFormsModule],
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
        distrito: new FormControl('', Validators.required),
        fechaAudiencia: new FormControl('')
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
              esDomicilio: new FormControl(false, Validators.required),
              finado: new FormControl(false),
              primeraLineaDomicilio: new FormControl(''),
              nuevoColindante: new FormControl(''),
            })
          ])
        }),
        colindanciasSur: new FormGroup({
          colindancias: new FormArray([
            new FormGroup({
              medida: new FormControl(0, Validators.required),
              colindante: new FormControl('', Validators.required),
              esDomicilio: new FormControl(false, Validators.required),
              primeraLineaDomicilio: new FormControl(''),
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
              esDomicilio: new FormControl(false, Validators.required),
              primeraLineaDomicilio: new FormControl(''),
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
              esDomicilio: new FormControl(false, Validators.required),
              primeraLineaDomicilio: new FormControl(''),
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
        comprador : new FormGroup({
          nombre : new FormControl(''),
          paterno: new FormControl(''),
          materno: new FormControl(''),
          sexo: new FormControl(''),
          casado: new FormControl(false)
        }),
        localidad: new FormControl(''),
        municipio: new FormControl(''),
        ejercicioFiscal: new FormControl(''),
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
            calle: new FormControl(''),
            barrio: new FormControl(''),
            localidad: new FormControl(''),
            municipio: new FormControl(''),
            distrito: new FormControl(false),
            estado: new FormControl(''),
          })
        ]),
        relaciones: new FormArray([
          new FormGroup({
            tiempoConocimiento: new FormControl(0)
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

    var numeroPasos = (this.idJuicio() !== 1) ? (this.documentoSelected().clave.length) + 5 : 
      ( (this.idJuicio() === 1 && this.idDocumento() === 7 ) ? ((this.documentoSelected().clave.length) + 3) : 
      ((this.documentoSelected().clave.length) + 4) )
    
    if(numeroPasos === this.actualStep ){
      //if (!this.mainForm.valid) { // Marca todos los campos como tocados para mostrar los errores
      //  this.datosFaltantes = true;
      //}
      //else{
      //  this.datosFaltantes = false;
      //  this.enviarDatos();
      //}
      this.enviarDatos();
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
        console.error('Error en llamada:', error.error, error);
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
        console.error('Error en la llamada:', error.message, error);
      }
    });
  }

  enviarDatos(){
    console.log('FormDataFile:', this.mainForm.value);
    this.api.postInfo('Expediente/procesar-documento', this.mainForm.value).subscribe({
      next: (response) => {
        console.log(response);
        this.consultarRegistros(response.url);
        console.log('URL OneDrive:', response.url);
        console.log('Nombre:', response.resultado.fileDownloadName);
        console.log('Contenido:', response.resultado.contentType);
        console.log('Contenido B64:', response.resultado.fileContents);

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
        console.error('Error en la llamada:', error.message);
      }
    });
  }

  consultarRegistros(url:string){
    this.api.getInfo('/JuicioInterno/' + this.mainForm.value.step1?.expedienteInterno).subscribe({
      next: (response) => {
        console.log('Consulta realizada:', response);
      },
      error: (error) => {
        console.error('Error en la llamada:', error.error.status);
        console.error('Error en la llamada:', error);
        if (error.error && error.error.status === 404) {
          this.crearExpediente(url);
        }
      }
    });
  }

  crearExpediente(url: string){
    const data = {
      id: this.mainForm.value.step1?.expedienteInterno,
      idTipoJuicio: this.idJuicio(),
      parteActora: '',
      parteDemandada: '',
      abogado: '',
      fechaInicio: new Date().toISOString(), 
    }
    console.log('FormDataExpediente:', data);
    this.api.postInfo('JuicioInterno', data).subscribe({
      next: (response) => {
        console.log('Expediente creado:', response);
        this.crearDocumento(url);
      },
      error: (error) => {
        console.error('Error al crear expediente:', error);
        console.error('Error al crear expediente:', error.message);
        console.error('Error al crear expediente:', error.error.status);
      }
    })
  }

  crearDocumento(url: string){
    const data = {
      idExpedienteInterno: this.mainForm.value.step1?.expedienteInterno,
      idTipoDocumento: this.idDocumento(),
      fechaCreacion: new Date().toISOString(),
      urlDocumento: url, // Aquí puedes asignar la URL del documento generado si la tienes
    }
    console.log('FormDataDocument:', data);
    this.api.postInfo('DocumentosGenerados', data).subscribe({
      next: (response) => {
        console.log('Documento creado:', response);
      },
      error: (error) => {
        console.error('Error al crear documento:', error);
        console.error('Error al crear documento:', error.message);
        console.error('Error al crear documento:', error.error.status);
      }
    })
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
