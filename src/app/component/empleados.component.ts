import { Component } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { Empleado } from '../models/empleado';
import { NgForm } from '@angular/forms';


@Component({
    selector:'empleados',
    templateUrl:'../templates/empleados.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[EmpleadosService]
})
export class EmpleadosComponent{
    public titulo:string;
    public empleados:Array<Empleado>;
    public empleados_alta:Array<any>=[];
    public empleados_baja:Array<any>=[];
    public visibles:number;
    public info_empleado:Empleado;


    constructor(
        private _empleadosService:EmpleadosService
    ){
        this.titulo='Se Arranco el componente EmpleadoComponent';
        this.visibles=1;
    }
    
    ngOnInit(){
        console.log(this.titulo);
        // Ejecutar metodo getEmpleados del servicio
        this._empleadosService.getEmpleado().subscribe(
            result => {
                //console.log(result);
                if(!result.result){
                    console.log(result);
                }else{
                    this.empleados = result.result;
                    console.log(this.empleados);
                }
                this.dividirXStatus();
            },
            error => {
                console.log(<any>error);
            }
        );
        this.info_empleado=this.empleados_alta[1];
    }

    public dividirXStatus(){
        for (let index = 0; index < this.empleados.length; index++) {
            if(this.empleados[index].status==1){
                this.empleados_alta.push(this.empleados[index]);
            }else{
                this.empleados_baja.push(this.empleados[index]);
            }
        }
    }

    public verTodos(){
        this.visibles=1;
    }
    public verAlta(){
        this.visibles=2;
    }
    public verBaja(){
        this.visibles=3;
    }

    public infoEmpleado(id){
        for (let index = 0; index < this.empleados.length; index++) {
            if(this.empleados[index].idempleado==id){
                this.info_empleado=this.empleados[index];
            }
        }
        console.log(this.info_empleado);
    }
}