//MODULOS
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //#
import { HttpModule } from '@angular/http'; //#
import { HttpClientModule } from '@angular/common/http';//#

//RUTAS: 
import { routing, appRoutingProviders } from './app.routing';


// Components: 
import { AppComponent } from './app.component';
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





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpleadosComponent,
    EmpleadoNuevoComponent,
    ClientesComponent,
    ClienteNuevoComponent,
    NegociosComponent,
    NegocioNuevoComponent,
    NegocioGiroComponent,
    AprobarPrestamoComponent,
    AprobarJustificacionComponent,
    NuevoPrestamoComponent,
    CobrosComponent,
    ReportesCobrosComponent,
    SucursalComponent,
    SucursalNuevaComponent,
    EmpresaComponent,
    EmpresaNuevaComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
