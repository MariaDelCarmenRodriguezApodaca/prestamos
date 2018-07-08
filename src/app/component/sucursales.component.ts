import {Component} from '@angular/core';
@Component({
    selector:'sucursal',
    templateUrl:'../templates/sucursales.component.html',
    styleUrls:['../styles/styles.css']
})
export class SucursalComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente de sucursales'
    }
}