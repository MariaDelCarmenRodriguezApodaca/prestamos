import { Component } from '@angular/core';
import { Negocio } from '../models/negocio';
import { NegociosService } from '../services/negocios.service';
import { NgForm } from '@angular/forms';


@Component({
    selector:'negocio-nuevo',
    templateUrl:'../templates/negocio_nuevo.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[NegociosService]
})
export class NegocioNuevoComponent{
    public titulo:string
    public nuevoNegocio: Negocio;


    constructor(
        private _negocioService: NegociosService
    ){
        this.titulo='Añadir un Nuevo Negocio';
        this.nuevoNegocio = new Negocio(0,0,'','','','','','','',0,0);
    }
    ngOnInit(){
        console.log(this.titulo);
    }

    public addNegocio(formulario:NgForm){
        console.log(formulario);
    }

    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoNegocio=new Negocio(0,0,'','','','','','','',0,0);
    }
}


// "idnegocio": 17,
// "idcliente": 26,
// "nombre_negocio": "INSTITUTO DE PSICOLOGIA JJR",
// "callenum": "NO. 6",
// "colonia": "EL RINCON",
// "estado": "Sinaloa",
// "municipio": "GUASAVE",
// "poblacion": "JUAN JOSE RIOS",
// "foto_negocio": "uploads/46edb486-0496-46dc-966f-2be146a1df591.jpg",
// "tipo_negocio": 1,
// "giro_negocio": 5