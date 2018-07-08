import { Component } from '@angular/core';

@Component({
    selector:'negocios-giro',
    templateUrl:'../templates/negocio_giro.component.html',
    styleUrls:['../styles/styles.css']
})
export class NegocioGiroComponent{
    public titulo:string
    constructor(){
        this.titulo='Se arranco el componente NegocioGiroComponent';
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}