import {Component} from '@angular/core';
import {Sucursal} from '../models/sucursal';
import {SucursalesService} from '../services/sucursales.service';
import {NgForm} from '@angular/forms'

@Component({
    selector:'sucursal',
    templateUrl:'../templates/sucursales.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[SucursalesService]
})
export class SucursalComponent{
    public titulo:string;
    public result:any; //recive la peticion http del servicio

    public sucursales:Array<Sucursal>;
    public editarSucursal: Sucursal; 
    

    constructor(
        private _sucursalesService:SucursalesService
    ){
        this.titulo='Se arranco el componente de sucursales';
        this.editarSucursal = new Sucursal(0,'','','','','','',0,'','','',0,0);
    }
    ngOnInit(){
        this._sucursalesService.getSucursales().subscribe(
            result=>{
                if(result['result']){
                    this.result=result['result'];
                    this.sucursales=result['result'] as Sucursal[];
                    console.log(this.sucursales);
                }else{
                    console.log(result);
                }
            });
    }
    public addSucursal(formulario:NgForm){
        console.log(formulario);
    }

    public limpiarForm(form:NgForm){
        form.reset();
        this.editarSucursal=new Sucursal(0,'','','','','','',0,'','','',0,0);
    }
}