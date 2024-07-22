import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment';
import { Guitrarra } from '../_models/Guitarra';
@Injectable({
  providedIn: 'root'
})
export class GuitarrasService {

  constructor(private http: HttpClient) { }


  listar():Observable<Guitrarra[]>{
    return this.http.get<Guitrarra[]>(`http://localhost:8080/api/listar`)
  }
}
