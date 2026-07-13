import { Routes } from '@angular/router';
import { Inicio } from './components/informacionJuicios/inicio/inicio';
import { RespuestaDocumentosGenerados } from './components/respuestas/respuesta-documentos-generados/respuesta-documentos-generados';
import { MenuPrincipal } from './components/sections/menu-principal/menu-principal';
import { SubirArchivos } from './components/sections/subir-archivos/subir-archivos';

export const routes: Routes = [
    {
        path:'',
        component: MenuPrincipal
    },
    {
        path:'generar_documentos',
        component: Inicio
    },
    {
        path:'documento_exitoso',
        component: RespuestaDocumentosGenerados
    },
    {
        path:'subir_archivo',
        component: SubirArchivos
    }
    //{
    //    path:'personas/parte_actora',
    //    component: Actores
    //},
    //{
    //    path:'personas/parte_demandada',
    //    component: Demandados
    //},
    //{
    //    path:'inmueble/direccion',
    //    component: DireccionInmueble
    //},
    //{
    //    path:'inmueble/colindancia',
    //    component: ColindanciaInmueble
    //},
    //{
    //    path:'inmueble/compraventa_inmueble',
    //    component: InformacionCompraventaInmueble
    //},
    //{
    //    path:'inmueble/inscripcion_inmueble',
    //    component: InscripcionInmueble
    //},
    //{
    //    path:'personas/informacion_abogado',
    //    component: InformacionAbogado
    //}
];
