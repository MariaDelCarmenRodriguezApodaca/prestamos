import { Component } from '@angular/core';
import { Cliente} from '../models/cliente';
import { NgForm } from '@angular/forms';

@Component({
    selector:'cliente-nuevo',
    templateUrl:'../templates/cliente_nuevo.component.html',
    styleUrls:['../styles/styles.css']
})
export class ClienteNuevoComponent{

    public titulo:string;
    public nuevoCliente: Cliente;

    constructor(){
        this.titulo='Se arranco el componente ClienteNuevoComponent';
        this.nuevoCliente= new Cliente(0,'','','','','','','','','',0,'','',0,0);
    }
    ngOnInit(){
        console.log(this.titulo);
    }

    public addCliente(form:NgForm){
        console.log(form);
    }

    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoCliente=new Cliente(0,'','','','','','','','','',0,'','',0,0);
    }

} 