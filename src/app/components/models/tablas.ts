export interface usuario{
  id_usuario: number
  correo:String,
  nombre:String,
  contraseña:String
}
export interface planta{
  id_planta: number,
  nombre:String,
  segmento: String,
  zona: String,
  estado: String,
  procentaje_cumplimiento: number,
  fija: Boolean
}

export interface permiso{
  id_requerimiento: number,
  nombre_requerimiento: String,
  peso: number,
  impacto: String
}

export interface registro{
id_registro: number,
id_planta: number,
id_requerimiento: number,
fecha_inicio: Date,
fecha_vencimiento: Date,
observaciones: String,
estatus: String,
validez_unica: boolean,
url:String
}
export interface historial{
id_historial: number,
segmento: String,
zona: String,
procentaje_cimplimiento: number,
fecha: Date
}

