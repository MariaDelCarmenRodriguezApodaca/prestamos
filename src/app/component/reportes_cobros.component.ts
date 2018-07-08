import {Component} from '@angular/core';
@Component({
    selector:'reportes-cobros',
    templateUrl:'../templates/reportes_cobros.component.html',
    styleUrls:['../styles/styles.css']
})
export class ReportesCobrosComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente Reportes de cobros'
    }
}