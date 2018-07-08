import {Component} from '@angular/core';
@Component({
    selector:'aprobar-justificacion',
    templateUrl:'../templates/aprobar_justificacion.component.html',
    styleUrls:['../styles/styles.css']
})
export class AprobarJustificacionComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente Aprobar Justificacion'
    }
}