import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiConexion } from '../../services/api-conexion';
import { environment } from '../../../environments/environment';
import { switchMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export interface PerfilUsuario {
  nombre: string;
  correo: string;
  puesto: string; // "Abogado", "Asistente", "Administrador", etc.
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario = signal<PerfilUsuario | null>(null);

  private api = inject(ApiConexion)

  constructor(private http: HttpClient) {}

  // Se ejecuta al cargar la aplicación para saber quién está dentro
  cargarPerfil(): Observable<PerfilUsuario | null> {
    const peticion$ = !environment.production
      ? this.http.get<PerfilUsuario>(`${environment.apiUrl}/Usuario/perfil`)
      : this.http.get<any[]>('/.auth/me').pipe(
          switchMap(authData => {
            const token = authData[0]?.access_token || authData[0]?.id_token;
            return this.http.get<PerfilUsuario>(`${environment.apiUrl}/Usuario/perfil`, {
              headers: { Authorization: `Bearer ${token}` }
            });
          })
        );

    return peticion$.pipe(
      tap(data => this.usuario.set(data)), // Guardamos la respuesta en el Signal
      catchError(err => {
        console.error('Error al cargar perfil:', err);
        return of(null);
      })
    );
  }

  // Función para evaluar si el puesto actual tiene permiso de ver una opción
  tienePermiso(puestosPermitidos: string[]): boolean {
    const usuarioActual = this.usuario();
    if (!usuarioActual) return false;
    
    // Validamos si el puesto del usuario coincide con los permitidos (ignorando mayúsculas/minúsculas)
    return puestosPermitidos.some(p => p.toLowerCase() === usuarioActual.puesto.toLowerCase());
  }

  nombre(){
    const usuario = this.usuario();
    return usuario?.nombre
  }

  logout(): void {
    // 1. Limpiamos el Signal / Estado local del usuario en Angular
    this.usuario.set(null);
    
    if (environment.production) {
      // 2. Redirigimos al endpoint de logout de Azure EasyAuth
      window.location.href = '/.auth/logout?post_logout_redirect_uri=/';
    } else {
      // 3. En local simplemente recargamos la página o redirigimos a /login
      window.location.href = '/';
    }
  }
}