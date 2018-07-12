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

    public result:any //resultado de la peticion http
    public empleados:Array<Empleado>; //arreglo de empleados 
    public empleados_alta:Array<any>=[]; //arreglo de empleados en alta
    public empleados_baja:Array<any>=[]; //arreglo de empleados en baja
    public visibles:number; // variable para el control de empleados en alta 
    public info_empleado:Empleado;
    public nuevoEmpleado:Empleado;

    public pag:number; //numero de la pagina en que se encuentra
    public numRow:number;//numero de rows
    public numPag:number; //numero de paginas
    public arrayPag:Array<number>; //array que guardara el numero de paginas


    constructor(
        private _empleadosService:EmpleadosService
    ){
        this.titulo='Se Arranco el componente EmpleadoComponent';
        this.visibles=1;
        this.nuevoEmpleado=new Empleado(0,'','','','','','','','','','',0,0,'','',0,0,0);

    }
    
    ngOnInit(){
        console.log(this.titulo);
        // Ejecutar metodo getEmpleados del servicio
        this._empleadosService.getEmpleado().subscribe(
            result => {
                //console.log(result);
                if(!result['result']){
                    console.log(result);
                }else{
                    this.empleados = result['result'] as Empleado[];
                    console.log(this.empleados);
                }
                this.dividirXStatus();
            });
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




    // CALCULAR PAGINACION
    public calcularPaginacion(){
        this.numRow = this.result.result.length;
        console.log(`-----------rows:${this.numRow}`)
        this.numPag = this.numRow/10;
        if(!Number.isInteger(this.numPag)){
            this.numPag=Math.trunc(this.numPag);
            this.numPag += 1;
        }
        console.log(`El numero de paginas sera: ${this.numPag}`);
        for(let i=0; i < this.numPag; i++){
            this.arrayPag[i]=i+1;
        }
        console.log(`El arreglo con las paginas es: `,this.arrayPag);
        this.cambiarPagina(this.pag);
    }
    // CONTROLAR PAGINACION
    public cambiarPagina(pag){
        this.empleados=[];
        this.pag = pag;
        var calculo1 = this.pag*10;
        var resta = 0;
        if(calculo1 > this.numRow){
            //si es mayor veo por cuanto
            var resta = calculo1 - this.numRow;
            console.log(`pag*10 se exede del numero de rows por: ${resta}`);
            // le resto eso en el for
        }
        var x = calculo1-resta-10;
        for(let i=0; i < 10; i++ ){ //ciclo para iterar peticion
            this.empleados[i]=this.result.result[x];
            x++;
        }
        console.log(this.empleados);
    }
    
    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoEmpleado=new Empleado(0,'','','','','','','','','','',0,0,'','',0,0,0);
    }










}