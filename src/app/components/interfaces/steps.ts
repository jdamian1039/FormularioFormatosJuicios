import e from "express"
import { Colindancia } from "./colindancia.interface"

export interface Step1 {
  juicio : string,
  expedienteInterno : string,
  documento : string
}

export interface Step2 {
  expediente : string,
  fechaReplica: string,
  distrito : string,
  correo : string
}

export interface Step3 {
  actores: Actores[]
}

export interface Actores {
  nombre : string,
  paterno: string,
  materno: string,
  sexo: string,
  casado: boolean
}
export interface Step4 {
  demandados: DemandadosInterface[],
  direccion: Direccion
}

export interface DemandadosInterface {
  nombre : string,
  paterno: string,
  materno: string,
  sexo: string,
  casado: boolean,
}

export interface Direccion {
  calle: string,
  barrio: string,
  localidad: string,
  municipio: string,
  distrito: boolean,
  estado: string
}

export interface Step5 {
  abogados: Abogados[]
}

export interface Abogados {
  titulo: string,
  nombre: string,
  paterno: string,
  materno: string,
  sexo: string,
  cedula: string
}

export interface Step6 {
  superficie: string,
  superficieLetrasMetros: string,
  superficieLetrasCentimetros: string,
  direccion: Direccion
}

export interface Step7 {
  colindanciasNorte: BloqueoColindancia,
  colindanciasSur: BloqueoColindancia,
  colindanciasEste: BloqueoColindancia,
  colindanciasOeste: BloqueoColindancia
}

export interface BloqueoColindancia {
  colindancia: Colindancia[]
}

export interface Step8 {
  oficina: string,
  fechaInscripcion: string,
  folioElectronico: string,
  codemandadoDominio: string,
  codemandadoCausante: string,
  tildacion: string
}

export interface Step9 {
  fechaCompraventa: string,
  fechaPosesion: string,
  precio: string,
  precioLetras: string,
  centavos: number,
  localidad: string,
  municipio: string,
  impuestos: ImpuestoItem[]
}

export interface Step10 {
  testigos: Testigo[]
}

export interface Testigo {
  datosTestigo: DatosTestigo,
  direccion: Direccion
}
export interface DatosTestigo {
  nombre: string,
  paterno: string,
  materno: string,
  sexo: string,
  casado: boolean
}
export interface ImpuestoItem {
  impuesto: string
}