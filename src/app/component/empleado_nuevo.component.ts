import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';

@Component({
    selector:'empleado-nuevo',
    templateUrl:'../templates/empleado_nuevo.component.html',
    styleUrls:['../styles/styles.css']
})
export class EmpleadoNuevoComponent{
    public titulo:string;
    public nuevoEmpleado:Empleado
    constructor(){
        this.titulo='Se Arranco el componente EmpleadoNuevoComponent';
        this.nuevoEmpleado=new Empleado(0,'','','','','','','','','','',0,0,'','',0,0,0);
    }
    
    ngOnInit(){
        console.log(this.titulo);
    }
}

// 1public idempleado:number,
// 2public nombres:string,
// 3public app_pat:string,
// 4public app_mat:string,
// 5public callenum:string,
// 6public colonia:string,
// 7public estado:string,
// 8public municipio:string,
// 9public poblacion:string,
// 10public telefono:string,
// 11public fecha_alta:string,
// 12public negocio:number,//id de la empresa
// 13public sucursal:number,//id de la sucursal
// 14public usuario:string,
// 15public password:string,
// 16public status:number,//puede ser 1 o 0
// 17public puesto:number,//aqui va el id del puesto
// 18public derecho_esp:number//En duda