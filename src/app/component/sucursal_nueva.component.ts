import {Component} from '@angular/core';
import { Sucursal } from '../models/sucursal';
import { SucursalesService } from '../services/sucursales.service';
import { NgForm } from '@angular/forms';


@Component({
    selector:'sucursal-nueva',
    templateUrl:'../templates/sucursal_nueva.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[SucursalesService]
})
export class SucursalNuevaComponent{
    public titulo:string;
    public nuevaSucursal: Sucursal;

    constructor(
        private _sucursalService:SucursalesService
    ){
        this.titulo='Añadir una Nueva Sucursal'
        this.nuevaSucursal = new Sucursal(0,'','','','','','',1,'','','',0,0);
    }

    ngOnInit(){
        console.log(this.titulo);        
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
}