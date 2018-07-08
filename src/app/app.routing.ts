//este archivo lo genere yo para poder ahcer routing en angular

//importare los modulos de algular que necesita para rutear
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from  '@angular/router';

//componentes
import {HomeComponent} from './component/home.component';
import {EmpleadosComponent} from './component/empleados.component';
import {EmpleadoNuevoComponent} from './component/empleado_nuevo.component';
import {ClientesComponent} from './component/clientes.component';
import {ClienteNuevoComponent} from './component/cliente_nuevo.component';
import {NegociosComponent} from './component/negocios.component';
import {NegocioNuevoComponent} from './component/negocio_nuevo.component';
import {NegocioGiroComponent} from './component/negocio_giro.component';
import {ErrorComponent} from './component/error.component';
import {AprobarPrestamoComponent} from './component/aprobar_prestamo.component';
import {AprobarJustificacionComponent} from './component/aprobar_justificacion.component';
import {NuevoPrestamoComponent} from './component/nuevo_prestamo.component';
import {CobrosComponent} from './component/cobros.component';
import {ReportesCobrosComponent} from './component/reportes_cobros.component';
import {SucursalComponent} from './component/sucursales.component';
import {SucursalNuevaComponent} from './component/sucursal_nueva.component';
import {EmpresaComponent} from './component/empresa.component';
import {EmpresaNuevaComponent} from './component/empresa_nueva.component';




//creamos un array de tipo routes
const appRoutes:Routes=[
	{path:'',component:HomeComponent},
	{path:'home',component:HomeComponent},
	{path:'empleados',component:EmpleadosComponent},
	{path:'empleado_nuevo',component:EmpleadoNuevoComponent},
	{path:'clientes',component:ClientesComponent},
	{path:'cliente_nuevo',component:ClienteNuevoComponent},
	{path:'negocios',component:NegociosComponent},
	{path:'negocio_nuevo',component:NegocioNuevoComponent},
	{path:'negocio_giro',component:NegocioGiroComponent},
	{path:'aprobar_prestamo',component:AprobarPrestamoComponent},
	{path:'aprobar_justificacion',component:AprobarJustificacionComponent},
	{path:'nuevo_prestamo',component:NuevoPrestamoComponent},
	{path:'cobros', component:CobrosComponent},
	{path:'reportes_cobros', component:ReportesCobrosComponent},
	{path:'sucursales', component:SucursalComponent},
	{path:'sucursal_nueva', component:SucursalNuevaComponent},
	{path:'empresa', component:EmpresaComponent},
	{path:'empresa_nueva', component:EmpresaNuevaComponent},
	{path:'**',component:ErrorComponent}
]


//exportamos
export const appRoutingProviders:any=[];//este es un procedimiento que necsita angular para poder cargar el propvider de la ruta
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);//con este metodo le decimos que array de rutas tiene que cargar





