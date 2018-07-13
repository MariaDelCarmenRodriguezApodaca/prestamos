import {Component} from '@angular/core';
@Component({
    selector:'reportes-cobros',
    templateUrl:'../templates/pagos_atrasados.component.html',
    styleUrls:['../styles/styles.css']
})
export class PagosAtrasadosComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente Reportes de cobros'
    }
}