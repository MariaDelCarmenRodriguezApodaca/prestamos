import {Component} from '@angular/core';
@Component({
    selector:'cobros',
    templateUrl:'../templates/cobros.component.html',
    styleUrls:['../styles/styles.css']
})
export class CobrosComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente cobros'
    }
}