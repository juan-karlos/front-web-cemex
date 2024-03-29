import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { conteo } from '../components/models/tablas';
import { zonas } from '../components/models/tablas';
@Injectable({
  providedIn: 'root'
})
export class ZonaPasificoService {
  // URL_API='http://localhost:3200/api/requerimiento/'
  URL_API='http://86.38.204.102:3200/api/requerimiento/'

  permiso_plan:conteo[]=[]
  zonasConteo:zonas[]=[]



  constructor(private http:HttpClient){  }

  conteonacional(){
    return this.http.get<conteo[]>(this.URL_API+"conteo")
  }

  conteoZon(){
    return this.http.get<zonas[]>(this.URL_API+"zonas")
  }
  conteonacional2(segmento: any){
    return this.http.post<conteo[]>(this.URL_API+"conteo", segmento)
  }

  conteoZon2(segmento: any){
    return this.http.post<zonas[]>(this.URL_API+"zonas", segmento)
  }
}
