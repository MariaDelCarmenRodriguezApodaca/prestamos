import {Component} from '@angular/core';
import {PrestamosXAprobrar} from '../models/prestamoXaprobar'; //importamo el modelo prestamoXaprobar para poder tener un esquema de que tipo sera nuestro arreglo de prestamos
import {PrestamosService} from '../services/prestamos.service'; //importamos el servicio prestamos que creamos para porder ejecutar gPrestamosXAprobar y obtener los prestamos del servidor
import { Prestamo } from '../models/prestamo';

@Component({
    selector:'aprobar-prestamo',
    templateUrl:'../templates/aprobar_prestamo.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[PrestamosService] //añadimos a providers nuestro servicio
})
export class AprobarPrestamoComponent{
    public titulo:string;

    public prestamos_detallados:Array<PrestamosXAprobrar>; //creamos un arreglo de tipo PrestamosXAprobar, es donde tendremos la lista de prestamos
    public result:any; //creamos una variable en donde guardaremos el resultado de la peticion  http que hicimos en el servicio

    public pag:number; //numero de la pagina en que se encuentra
    public numRow:number;//numero de rows
    public numPag:number; //numero de paginas
    public arrayPag:Array<number>=[]; //array que guardara el numero de paginas

    public info_prestamo_detallada:PrestamosXAprobrar;
    public editar_prestamo:Prestamo;

    constructor(
        private _prestamosService:PrestamosService //delcaramos el servicio en el contructor
    ){
        this.titulo='Se arranco el componente Aprobar prestamo';
        this.pag=1;
        this.arrayPag=[];
        this.info_prestamo_detallada= new PrestamosXAprobrar(0,0,0,0,'',0,0,0,'',0,'','',0,0,0,'','','','','','','',0);
    }
    
    ngOnInit(){
        this.getPrestamos(); //recien cargado el componente obtenemos los prestamamos X Aprobar , get prestamos es del componentee, no del servicio
        
    }

    public ver(info_prestamo:PrestamosXAprobrar){
        this.info_prestamo_detallada = info_prestamo;
    }


        
    public getPrestamos(){
        // Ejetutamos 
        this._prestamosService.PrestamosXAprobar().subscribe(
            result =>{
                if(result['result']){ //si nos regresa result.result
                    this.result = result; //guardamos en nuestra propiedad result lo que nos devolvio la peticion
                    console.log('si esxistio result.result',this.result);
                    this.calcularPaginacion();
                }else(
                    console.log('NO esxistio result.result')
                )
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
        this.prestamos_detallados=[];
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
            this.prestamos_detallados[i]=this.result.result[index];
            index++;
        }
        console.log(this.prestamos_detallados);
    }



}