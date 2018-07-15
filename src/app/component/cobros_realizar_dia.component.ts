import {Component} from '@angular/core';
import {CobroXRealizarDia} from '../models/cobro_realizar_dia';
import {CobrosService} from '../services/cobros.service';
import {NgForm} from '@angular/forms';

@Component({
    selector:'cobros',
    templateUrl:'../templates/cobro_realizar_dia.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[CobrosService]

})
export class CobrosRealizarDiaComponent{
    public titulo:string;
    public result:any;
    public cobros_xdia:Array<CobroXRealizarDia>;


    public pag:number; //numero de la pagina en que se encuentra
    public numRow:number;//numero de rows
    public numPag:number; //numero de paginas
    public arrayPag:Array<number>; //array que guardara el numero de paginas
    

    public cobroSeleccionado:CobroXRealizarDia;
    public pagarCobroSeleccionado:CobroXRealizarDia;

    constructor(
        private _cobrosService:CobrosService
    ){
        this.titulo = 'Cobros correspondientes al dia';
        this.arrayPag=[];
        this.pag=1;
        this.cobroSeleccionado= new CobroXRealizarDia(0,'','','','',0,'','','','','','',0,0,'',0,0,0,0,0,'',0,'');
        this.pagarCobroSeleccionado = new CobroXRealizarDia(0,'','','','',0,'','','','','','',0,0,'',0,0,0,0,0,'',0,'');
    }

    ngOnInit(){
        this.obtenerCobrosXDia();
    }

    public obtenerCobrosXDia(){
        this._cobrosService.getCobrosXDia().subscribe(
            result =>{
                if(result['result']){
                    this.result = result;
                    console.log('---> result:',result);
                    this.calcularPaginacion();
                }else{
                    console.log('ERROR!! ---> result:',result);
                }
            }
        )
    }

    public seleccionarInfoCobroXDia(cobro:CobroXRealizarDia){
        this.cobroSeleccionado = cobro;
        this.pagarCobroSeleccionado = cobro;
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
        this.cobros_xdia=[];
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
            this.cobros_xdia[i]=this.result.result[index];
            index++;
        }
        console.log(this.cobros_xdia);
    }

}