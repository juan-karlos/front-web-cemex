export interface usuario{

  correo:String,
  nombre:String,
  contraseña:String
}
export interface planta{
  id_planta: number,
  nombre_planta:String,
  segmento: String,
  zona: String,
  estado:String,
  porcentaje_cumplimiento: 0,
  fija: Boolean,
  activa: Boolean
}

export interface permiso{
  id_requerimiento: number,
  nom_req: String,
  peso: number,
  impacto: String,
  siglas: String
}

export interface registro{
id_planta: number,
id_requerimiento: number,
observaciones: String,
estatus: String,
validez_unica: boolean,
}
export interface historial{
id_historial: number,
segmento: String,
zona: String,
porcentaje_cumplimiento: number,
fecha: Date
}

