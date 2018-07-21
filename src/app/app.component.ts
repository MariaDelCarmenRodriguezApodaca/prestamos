import { Component } from '@angular/core';
import {EmpleadosService} from './services/empleados.service';
import {Empleado} from './models/empleado';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmpleadosService]
})
export class AppComponent {
  titulo = 'app';
  public usuario='';
  public password="";
  public empleado_log:Empleado;
  public puesto;
  public usuario_log;

  constructor(
    private _empleadoService:EmpleadosService,
  ){
    this.usuario_log=localStorage.getItem('usuario');
    console.log(this.usuario_log);
    this.empleado_log=JSON.parse(localStorage.getItem('empleado_log'));
    this.puesto=localStorage.getItem('puesto');
    console.log(this.puesto);
    console.log(this.empleado_log);
  }

  public ingresar(form:NgForm){
      this._empleadoService.login(this.usuario,this.password).subscribe(
        result=>{
          if(result['result']!=""){
            this.empleado_log=result['result'];
            console.log('Result-->',result['result']);
            localStorage.setItem('empleado_log',JSON.stringify(this.empleado_log));
            localStorage.setItem('puesto',this.empleado_log[0].puesto);
            localStorage.setItem('usuario',this.usuario);
            
            location.reload();
          }else{
            console.log('El usuario y contraseña no existen');
          }
          console.log('okOKok');
      });
  		
  }
  public salir(){
  		localStorage.clear();
      this.empleado_log=null;
      this.usuario_log=null;
  		this.usuario=null;
      this.password=null;
  }
}