import { Component } from '@angular/core';
import { Encuesta } from '../models/encuesta';


@Component({
    selector:'encuesta_nueva',
    templateUrl:'../templates/encuesta_nueva.component.html',
    styleUrls:['../styles/styles.css']
})

export class EncuestaNuevaComponent{
    public titulo:string;
    constructor(){
        this.titulo='Encuesta para el Cliente';
    }
}

