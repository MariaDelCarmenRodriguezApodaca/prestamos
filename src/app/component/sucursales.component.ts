import {Component} from '@angular/core';
import {Sucursal} from '../models/sucursal';
import {SucursalesService} from '../services/sucursales.service';


@Component({
    selector:'sucursal',
    templateUrl:'../templates/sucursales.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[SucursalesService]
})
export class SucursalComponent{
    public titulo:string;
    public sucursales:Array<Sucursal>;

    constructor(
        private _sucursalesService:SucursalesService
    ){
        this.titulo='Se arranco el componente de sucursales'
    }
    ngOnInit(){
        this._sucursalesService.getSucursales().subscribe(
            result=>{
                if(result.result){
                    this.sucursales=result.result;
                    console.log(this.sucursales);
                }else{
                    console.log(result);
                }
            },
            err=>{
                console.log(<any>err);
            }
        )
    }
}