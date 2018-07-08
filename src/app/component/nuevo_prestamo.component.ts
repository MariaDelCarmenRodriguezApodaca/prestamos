import {Component} from '@angular/core';
@Component({
    selector:'nuevo-prestamo',
    templateUrl:'../templates/nuevo_prestamo.component.html',
    styleUrls:['../styles/styles.css']
})
export class NuevoPrestamoComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente Nuevo prestamo'
    }
}