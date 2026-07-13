import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiConexion {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl; // URL base de la API, definida en environment.ts

  getInfo(endpoint:string ): Observable<any> {
    return this.http.get(`${this.baseUrl}${endpoint}`)
  }
  
  postInfo(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data)
  }
}

