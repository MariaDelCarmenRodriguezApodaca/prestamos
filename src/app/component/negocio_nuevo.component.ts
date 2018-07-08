import { Component } from '@angular/core';

@Component({
    selector:'negocio-nuevo',
    templateUrl:'../templates/negocio_nuevo.component.html',
    styleUrls:['../styles/styles.css']
})
export class NegocioNuevoComponent{
    public titulo:string
    constructor(){
        this.titulo='Se arranco el componente NegocioNuevoComponent';
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}