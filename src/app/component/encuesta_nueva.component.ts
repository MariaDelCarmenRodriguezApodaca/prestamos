import { Component } from '@angular/core';
import { Encuesta } from '../models/encuesta';
import {EncustaService} from '../services/encuestas.service'

@Component({
    selector:'encuesta_nueva',
    templateUrl:'../templates/encuesta_nueva.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[EncustaService]
})

export class EncuestaNuevaComponent{
    public titulo:string
    public result:any;
    public encuestas:Array<Encuesta>;
    public pag:number; //numero de la pagina en que se encuentra
    public numRow:number;//numero de rows
    public numPag:number; //numero de paginas
    public arrayPag:Array<number>; //array que guardara el numero de paginas


    constructor(
        private _encuestasService:EncustaService
    ){
        this.titulo="Se arranco encuestascomponente()";
        this.pag = 1; //se inicializa en la pagina 1
        this.arrayPag=[];
        this.encuestas=[];
    }
    ngOnInit(){
        this.OntenerEncuestas();
    }

    public OntenerEncuestas(){
        this._encuestasService.gteEncuestasPendientes().subscribe(
            result=>{
                if(result['result']){
                    this.result=result; 
                    this.calcularPaginacion();
                }else{
                    console.log(result);
                }
            });
    }




    // ---------------------------------PAGINATION
    // CALCULAR PAGINACION
    public calcularPaginacion(){
        this.numRow = this.result.result.length;
        console.log(`-----------rows:${this.numRow}`)
        this.numPag = this.numRow/10;
        if(!Number.isInteger(this.numPag)){
            this.numPag=Math.trunc(this.numPag);
            this.numPag += 1;
        }
        console.log(`El numero de paginas sera: ${this.numPag}`);
        for(let i=0; i < this.numPag; i++){
            this.arrayPag[i]=i+1;
        }
        console.log(`El arreglo con las paginas es: `,this.arrayPag);
        this.cambiarPagina(this.pag);
    }
    // CONTROLAR PAGINACION
    public cambiarPagina(pag){
        this.encuestas=[];
        this.pag = pag;
        var calculo1 = this.pag * 10;
        console.log(`El calculo1 es ${calculo1}`)
        var resta = 0;
        if(calculo1 > this.numRow){
            //si es mayor veo por cuanto
            var resta = calculo1 - this.numRow;
            console.log(`pag*10 se exede del numero de rows por: ${resta}`);
            // le resto eso en el for
        }
        var x = calculo1-resta;
        var index = this.pag-1;
        var limite = ((this.numRow < 10) ?this.numRow :10);
        for(let i=0; i < limite ; i++ ){ //ciclo para iterar peticion
            this.encuestas[i]=this.result.result[index];
            index++;
        }
        console.log(this.encuestas);
    }
}

