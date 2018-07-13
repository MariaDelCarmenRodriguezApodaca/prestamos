import { Component } from '@angular/core';
import { Empleado } from '../models/empleado';
import { EmpleadosService } from '../services/empleados.service';
import { NgForm } from '@angular/forms';

@Component({
    selector:'empleado-nuevo',
    templateUrl:'../templates/empleado_nuevo.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[EmpleadosService]
})
export class EmpleadoNuevoComponent{
    public titulo:string;
    public nuevoEmpleado:Empleado;

    constructor(
        private _empleadoService:EmpleadosService
    ){
        this.titulo='Se Arranco el componente EmpleadoNuevoComponent';
        this.nuevoEmpleado=new Empleado(0,'','','','','','','','','','',0,0,'','',1,0,0);
    }
    
    ngOnInit(){
        console.log(this.titulo);
    }

    public addEmpleado(){
        console.log(this.nuevoEmpleado);
        this._empleadoService.addEmpleado(this.nuevoEmpleado).subscribe(
            res=>{
                if(res['result']){
                    console.log(`Empleado guardado con exito`);
                    console.log(this.nuevoEmpleado);
                }else{
                    console.log(this.nuevoEmpleado);
                    console.log(res);
                }
            });
    };

    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoEmpleado=new Empleado(0,'','','','','','','','','','',0,0,'','',0,1,0);
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