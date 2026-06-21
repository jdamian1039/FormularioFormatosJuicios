import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiConexion {
  private http = inject(HttpClient);
  private baseUrl = 'http://localhost:5198'

  getInfo(endpoint:string ): Observable<any> {
    return this.http.get(`${this.baseUrl}/api${endpoint}`)
  }
  
  postInfo(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/api/${endpoint}`, data)
  }
}

