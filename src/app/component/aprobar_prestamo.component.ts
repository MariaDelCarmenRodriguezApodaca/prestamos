import {Component} from '@angular/core';
@Component({
    selector:'aprobar-prestamo',
    templateUrl:'../templates/aprobar_prestamo.component.html',
    styleUrls:['../styles/styles.css']
})
export class AprobarPrestamoComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente Aprobar Prestamo'
    }
}