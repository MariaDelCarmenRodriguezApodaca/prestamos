import { Component } from '@angular/core';

@Component({
    selector:'clientes',
    templateUrl:'../templates/clientes.component.html',
    styleUrls:['../styles/styles.css']
})
export class ClientesComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente ClientesComponent'
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}