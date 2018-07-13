//importamos el metodo injectable para poder injectar el servicio
import {Injectable} from '@angular/core';
//los metodos necesarios para hacer la peticion http
import {HttpClient} from '@angular/common/http';
//nuestro modelo de cobros
import {Cobro} from '../models/cobro';
//configuraciones globales
import {GLOBAL} from './global';

@Injectable()
export class CobrosService{
    public url:string;
    constructor(public _http:HttpClient){
        this.url=GLOBAL.url;
    }

    public getCobros(){
        console.log(`se corrio getCobros()`);
        return this._http.get(this.url+'cobros/get');
    }
    
    public addCobros(cobro:Cobro){
        console.log('Se corrio addCobros()');
        return this._http.post(this.url+`cobros/nueva`,cobro);
    }
    
    public updateCobro(cobro:Cobro){
        console.log(`Se corrio updateCobro()`);
        return this._http.put(this.url+`cobros/update/${cobro.idcobro}`,cobro);
    }
    
}
