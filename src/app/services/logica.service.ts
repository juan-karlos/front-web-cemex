import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogicaService {
 URL_API='http://localhost:3200/api/logica';




  constructor(private http:HttpClient) { }
}
