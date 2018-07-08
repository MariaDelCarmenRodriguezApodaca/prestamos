import { Component } from '@angular/core';

@Component({
    selector:'empleado-nuevo',
    templateUrl:'../templates/empleado_nuevo.component.html',
    styleUrls:['../styles/styles.css']
})
export class EmpleadoNuevoComponent{
    public titulo:string;

    constructor(){
        this.titulo='Se Arranco el componente EmpleadoNuevoComponent';
    }
    
    ngOnInit(){
        console.log(this.titulo);
    }
}