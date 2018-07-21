import { Component } from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'../templates/home.component.html',
    styleUrls:['../styles/styles.css']
})
export class HomeComponent{
    public titulo:string;
    public empleado_log;
    public fecha;
    constructor(){
        this.titulo='Se Arranco el componente HomeComponent';
        this.empleado_log=JSON.parse(localStorage.getItem('empleado_log'));
        var dt = new Date();
        var month = dt.getMonth()+1;
        var day = dt.getDate();
        var year = dt.getFullYear();
        this.fecha=month + '-' + day + '-' + year;
    }
    
    
    ngOnInit(){
        console.log(this.titulo);
    }
}