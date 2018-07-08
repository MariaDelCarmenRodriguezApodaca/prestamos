import { Component } from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'../templates/home.component.html',
    styleUrls:['../styles/styles.css']
})
export class HomeComponent{
    public titulo:string;

    constructor(){
        this.titulo='Se Arranco el componente HomeComponent';
    }
    
    ngOnInit(){
        console.log(this.titulo);
    }
}