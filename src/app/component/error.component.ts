import { Component } from '@angular/core';

@Component({
    selector:'error',
    templateUrl:'../templates/error.component.html',
    styleUrls:['../styles/styles.css']
})
export class ErrorComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente error';

    }
    ngOnInit(){
        console.log(this.titulo);
    }
}