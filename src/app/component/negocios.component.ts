import { Component } from '@angular/core';
import { Router,ActivatedRoute, Params } from '@angular/router';
import { NegociosService } from '../services/negocios.service';
import { Negocio } from '../models/negocio';

@Component({
    selector:'negocios',
    templateUrl:'../templates/negocios.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[NegociosService]
})
export class NegociosComponent{
    public titulo:string;
    public negocios:Array<Negocio>;

    constructor(
        private _route:ActivatedRoute,
        private _router: Router,
        private _negociosService:NegociosService
    ){
        this.titulo='Se arranco el componente NegociosComponent'; 
    }
    ngOnInit(){
        console.log(this.titulo);
        this._negociosService.getNegocios().subscribe(
            result => {
                //console.log(result);
                if(!result.result){
                    console.log(result);
                }else{
                    this.negocios = result.result;
                    console.log(this.negocios);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }
}