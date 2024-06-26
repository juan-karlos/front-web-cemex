export interface usuario{
  id_usuario: number, 
  correo:String,
  user:String,
  apellidos:String,
  password:String,
  zona:String,
  rol:String
}
export interface planta{
  id_planta: number,
  nombre_planta:String,
  segmento: String,
  zona: String,
  estado:String,
  porcentaje_cumplimiento: number,
  fija: Boolean,
  activa: Boolean
}
export interface doc{
  fecha_inicio: Date,
  fecha_vencimiento: Date,
  impacto: String,
  zona: String,
  segmento: String,
  url: String,
  nombre_doc: String
}

export interface permiso{
  id_requerimiento: number,
  nom_req: String,
  peso: number,
  impacto: String,
  siglas: String

}

export interface registro{
id_registro:number,
nombre_planta: string,
nombre_requerimiento: string,
fecha_inicio: Date,
fecha_vencimiento:Date ,
observaciones: String,
estatus: String,
validez_unica: boolean,
url: String,
impacto: String,
peso: number,
porcentaje_cumplimiento: String,
segmento: String,
siglas: String,
zona: String
}

export interface historial{
id_historial: number,
segmento: String,
zona: String,
porcentaje_cumplimiento: number,
fecha: Date
}

export interface segmentos{
  cadena_suministro:String,
  industriales:String,
  inmuebles_no_operativos:String,
  operaciones:String,
  transporte:String,
  Promexma:String,
  constructores:String
}
export interface conteo {
nombre:String,
impacto:String
plantaspas:number
plantascen:number
plantnor:number
plantsur:number
plantasgen:number
}
export interface zonas{
    Centro: String,
    Noreste: String,
    Pasifico:String,
    Sureste:String,
    total: String
}

export interface riesgo{
  nombre_planta: String,
  siglas: String,
  impacto:String,
  estatus: String,
  porcentaje_cumplimiento: number
}
export interface optimas{
  nombre_planta: String,
  siglas: String,
  porcentaje_cumplimiento: number
}

