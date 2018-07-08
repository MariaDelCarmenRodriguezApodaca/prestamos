import { Component } from '@angular/core';

@Component({
    selector:'empleados',
    templateUrl:'../templates/empleados.component.html',
    styleUrls:['../styles/styles.css']
})
export class EmpleadosComponent{
    public titulo:string;

    constructor(){
        this.titulo='Se Arranco el componente EmpleadoComponent';
    }
    
    ngOnInit(){
        console.log(this.titulo);
    }
}