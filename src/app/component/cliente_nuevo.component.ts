import { Component } from '@angular/core';
import { Cliente} from '../models/cliente';
import { NgForm } from '../../../node_modules/@angular/forms';

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

//public idcliente:number,
// public nombres:string,
// public app_pat:string,
// public app_mat:string,
// public callenum:string,
// public colonia:string,
// public estado:string,
// public municipio:string,
// public poblacion:string,
// public telefono:string,
// public status:number,
// public imagen_direccion:string, //
// public imagen_ine:string, //direccion de la imagen en el servidor
// public credito_solicitado:number,//1=si tiene creditos, 0= no tiene creditos pendientes
// public cantidad_creditos:number