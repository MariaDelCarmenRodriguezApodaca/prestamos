import { Component } from '@angular/core';

@Component({
    selector:'cliente-nuevo',
    templateUrl:'../templates/cliente_nuevo.component.html',
    styleUrls:['../styles/styles.css']
})
export class ClienteNuevoComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente ClienteNuevoComponent'
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}