import {Component} from '@angular/core';
@Component({
    selector:'sucursal-nueva',
    templateUrl:'../templates/sucursal_nueva.component.html',
    styleUrls:['../styles/styles.css']
})
export class SucursalNuevaComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente de nueva sucursal'
    }
}