import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Datos } from './datos';

const API_URL = 'http://127.0.0.1:3000/products';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor(private http: HttpClient) {}

  obtenerDatos(): Observable<Datos[]> {
    return this.http.get<Datos[]>(`${API_URL}`); 
  }

  crearDatos(datos: Datos): Observable<Datos> {
    return this.http.post<Datos>(`${API_URL}`, datos);
  }

  // Método para eliminar datos
  eliminarDatos(id: string): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`);
  }

  obtenerDatosPorId(id: string): Observable<Datos> {
    return this.http.get<Datos>(`${API_URL}/${id}`);
  }

  editarDatos(id: string, datos: Datos): Observable<Datos> {
    return this.http.patch<Datos>(`${API_URL}/${id}`, datos);
  }
}
