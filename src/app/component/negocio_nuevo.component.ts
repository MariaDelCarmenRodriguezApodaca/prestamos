import { Component } from '@angular/core';
import { Negocio } from '../models/negocio';
import { NegociosService } from '../services/negocios.service';
import { GirosNegociosService } from '../services/giros_negocios.service';
import {ClientesService} from '../services/clientes.service';

import { NgForm } from '@angular/forms';


@Component({
    selector:'negocio-nuevo',
    templateUrl:'../templates/negocio_nuevo.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[NegociosService,GirosNegociosService,ClientesService]
})
export class NegocioNuevoComponent{
    public titulo:string
    public nuevoNegocio: Negocio;


    // Parra llenar select: 
    public giros:any;
    public clientes:any;

    constructor(
        private _negocioService: NegociosService,
        private _giroNegocioService: GirosNegociosService,
        private _clientesService: ClientesService
    ){
        this.titulo='Añadir un Nuevo Negocio';
        this.nuevoNegocio = new Negocio(0,0,'','','','','','','','',0);
    }
    ngOnInit(){
        console.log(this.titulo);
        // llamamos metodos para llenar formulario
        this.getGirosNegocio();
        this.getClientes();
    }

    public addNegocio(){
        // `localhost/clientes/nuevo`
        this._negocioService.addNegocio(this.nuevoNegocio).subscribe(
            result=>{
                if(result['result']){
                    console.log('Negocio Añadido con exito');
                    console.log(result);
                }else{
                    console.log(`Error al añadir al Negocio, el resultado fue`);
                    console.log(result);
                }
        });
    }




//--------------------------------------------------------------------------------------------------
    // Para llenar campos en el select 
    public getGirosNegocio(){
        this._giroNegocioService.getGirosNegocios().subscribe(
            res=>{ 
                if(res['result']){
                    this.giros = res['result'];
                    console.log('Los giros del combobox son:');
                    console.log(this.giros);   
                }});
    }
    public getClientes(){
        this._clientesService.getClientes().subscribe(
            result =>{
               if(!result['result']){
                    console.log(result);
                }else{
                    this.clientes=result['result'];
                    console.log(this.clientes);
                    
                }
            }
        )
    }


// ----------------------------------------------------------------------------------------------
    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevoNegocio=new Negocio(0,0,'','','','','','','','',0);
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