import { Component, inject, signal } from '@angular/core';
import { ApiConexion } from '../../../services/api-conexion';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subir-archivos',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './subir-archivos.html',
  styleUrl: './subir-archivos.css',
})
export class SubirArchivos {

  private api = inject(ApiConexion)
  
  juiciosResponse = signal<CatJuicio[]>([]);
  documentosResponse = signal<CatDocumentos[]>([]);

  idJuicio = signal<number>(0)
  nombreDocumento = signal<string>('')
  idDocumento = signal<number>(0)

  constructor(private router: Router){
    
  }

  documentoSelected = signal<CatDocumentos>({
    id: 0,
    nombreDocumento: '',
    valorCombo: '',
    rutaTemplate: '',
    idJuicio: 0,
    clave: ''
  })

  archivoSeleccionado: File | null = null;

  mainForm = new FormGroup({
    expediente: new FormControl(''),
    juicio: new FormControl(''),
    documento: new FormControl(''),
  })

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

  onFileSelected(event: any) {
    this.archivoSeleccionado = null; // Reinicia la variable antes de capturar un nuevo archivo

    const file: File = event.target.files[0]; // Captura el archivo binario real

    if (file) {
      this.archivoSeleccionado = file;
      console.log('Archivo capturado con éxito:', this.archivoSeleccionado.name);
    }
  }

  enviarFormulario() {
    if (this.mainForm.invalid || !this.archivoSeleccionado) {
      alert('Por favor complete todos los campos y seleccione un archivo.');
      return;
    }

    // ⚠️ CRÍTICO: Para enviar archivos binarios combinados con textos a un servicio API,
    // debemos usar el objeto nativo FormData en lugar de enviar un JSON común.
    const formData = new FormData();

    // 1. Adjuntamos el archivo binario real (C# lo recibirá como IFormFile)
    formData.append('archivo', this.archivoSeleccionado, this.archivoSeleccionado.name);

    // 2. Adjuntamos el resto de los campos de tu formulario reactivo
    formData.append('expediente', this.mainForm.get('expediente')?.value ?? '');
    formData.append('juicio', this.mainForm.get('juicio')?.value ?? '');
    formData.append('documento', this.mainForm.get('documento')?.value ?? '');

    console.log('FormData preparado para enviar:', formData);

    // 3. Consumimos tu servicio enviándole el FormData completo
    this.api.postInfo('SubirDocumento/subirDocumento', formData).subscribe({
      next: (response) => {
        console.log('¡Archivo y datos subidos con éxito!', response);
        this.router.navigate(['/documento_exitoso'], {
          state: {
            url: response.url,                                      // El link de OneDrive
            fileContents: null,          // El string Base64 del archivo
            name: null,              // El nombre original asignado en C#
            type: response.contentType                   // El tipo MIME (.docx)
          }
        });
      },
      error: (error) => {
        console.error('Error al subir:', error);
      }
    });
  }

  ngOnInit():void {
    this.obtenerDatosJuicios()
  }

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
}
