import { Component } from '@angular/core';

@Component({
    selector:'negocios',
    templateUrl:'../templates/negocios.component.html',
    styleUrls:['../styles/styles.css']
})
export class NegociosComponent{
    public titulo:string
    constructor(){
        this.titulo='Se arranco el componente NegociosComponent';
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}