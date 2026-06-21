export interface Persona{
    id:number,
    nombre:string,
    apellidoPaterno:string,
    apellidoMaterno:string,
    sexo:string
}

export interface Direccion{
    id:number,
    calle:string,
    barrio:string,
    localidad:string,
    municipio:string,
    distrito:boolean,
    estado:string
}
