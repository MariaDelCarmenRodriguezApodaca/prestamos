import {Component} from '@angular/core';

@Component({
    selector:'prestamos',
    templateUrl:'../templates/prestamos.component.html',
    styleUrls:['../styles/styles.css']
})
export class PrestamosComponent{
    public titulo:string;
    constructor(){
        this.titulo = 'Se arranco el componente PrestamosComponent';
    }
    ngOnInit(){
        console.log(this.titulo);
    }
}