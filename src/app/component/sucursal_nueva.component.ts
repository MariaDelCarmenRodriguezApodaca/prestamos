import {Component} from '@angular/core';
import { Sucursal } from '../models/sucursal';
import { SucursalesService } from '../services/sucursales.service';
import { NgForm } from '@angular/forms';
import { EmpleadosService } from '../services/empleados.service';
import { EmpresasService } from '../services/empresas.service';

@Component({
    selector:'sucursal-nueva',
    templateUrl:'../templates/sucursal_nueva.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[SucursalesService,EmpleadosService,EmpresasService]
})
export class SucursalNuevaComponent{
    public titulo:string;
    public nuevaSucursal: Sucursal;

    // Para llenar select 
    public empleados:any;
    public empresas:any;

    constructor(
        private _sucursalService:SucursalesService,
        private _empleadosService:EmpleadosService,
        private _empresaService:EmpresasService
    ){
        this.titulo='Añadir una Nueva Sucursal'
        this.nuevaSucursal = new Sucursal(0,'','','','','',null,0,'','',null,0,0,);
    }

    ngOnInit(){
        console.log(this.titulo);  
        this.obtenerEmpleados();
        this.ObtenerEmpresas();      
    }  
    
    public addSucursal(){
        console.log(this.nuevaSucursal);
        this._sucursalService.addSucursal(this.nuevaSucursal).subscribe(
            res=>{
                if(res['result']){
                    console.log(res);
                }
                else{
                    console.log(`Error desde cliente al añadir sucursal ${res}`)
                }
            });
    }


    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevaSucursal=new Sucursal(0,'','','','','','',0,'','','',0,0);
    }


    // Para llenar select: 
    public ObtenerEmpresas(){
        this._empresaService.getEmpresas().subscribe(
            result=>{
                if(result['result']){
                    this.empresas=result['result'];
                    console.log(this.empresas);
                }
            });
    }
    public obtenerEmpleados(){
        this._empleadosService.getEmpleado().subscribe(
            result=>{
                if(result['result']){
                    this.empleados=result['result'];
                    console.log(this.empleados);
                }
            });
    }
}