import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {ClientesService} from '../services/clientes.service';
import {Cliente} from '../models/cliente';
import { Route } from '../../../node_modules/@angular/compiler/src/core';

@Component({
    selector:'clientes',
    templateUrl:'../templates/clientes.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[ClientesService]
})
export class ClientesComponent{
    public titulo:string;
    public clientes:Array<Cliente>;
    public info_cliente:Cliente;

    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _clienteService:ClientesService
    ){
        this.titulo='Se arranco el componente ClientesComponent'
    }
    ngOnInit(){
        console.log(this.titulo);
        this._clienteService.getClientes().subscribe(
            result =>{
               if(!result.result){
                    console.log(result);
                }else{
                    this.clientes = result.result;
                    console.log(this.clientes);
                    this.info_cliente=this.clientes[0];
                }
            },
            err =>{
                console.log(<any>err);
            }
        )
    }

    public infoCliente(id){
        for (let index = 0; index < this.clientes.length; index++) {
            if(this.clientes[index].idcliente==id){
                this.info_cliente=this.clientes[index];
            }
        }
        console.log(this.info_cliente);
    }
}