import { Component, OnInit, inject, signal } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-respuesta-documentos-generados',
  imports: [],
  templateUrl: './respuesta-documentos-generados.html',
  styleUrl: './respuesta-documentos-generados.css',
})
export class RespuestaDocumentosGenerados implements OnInit {
  private router = inject(Router);

  // Guardaremos los datos que pasamos desde la pantalla anterior
  oneDriveUrl = signal<string>('');
  fileContentsBase64 = signal<string>('');
  private fileName = '';
  private contentType = '';

  ngOnInit() {
    // Recuperamos el estado enviado a través del Router
    //const navigation = this.router.getCurrentNavigation();
    const state = history.state as { url: string, fileContents: string, name: string, type: string };
    console.log('Estado recibido en RespuestaDocumentosGenerados:', state);
    if (state) {
      this.oneDriveUrl.set(state.url);
      this.fileContentsBase64.set(state.fileContents);
      this.fileName = state.name;
      this.contentType = state.type;
    } 
    //else {
    //  // Si el usuario recarga la página manualmente y no hay estado, lo mandamos al inicio
    //  this.router.navigate(['/']);
    //}
  }

  descargarArchivoDesdeNavegador() {
    // 1. Convertir el string Base64 que mandó C# a un array de bytes (Uint8Array)
    const byteCharacters = atob(this.fileContentsBase64());
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);

    // 2. Crear el Blob con su ContentType correcto
    const blob = new Blob([byteArray], { type: this.contentType });

    // 3. Crear el enlace de descarga invisible en el navegador
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.fileName;
    
    document.body.appendChild(a);
    a.click();
    
    // 4. Limpieza de memoria
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
}
