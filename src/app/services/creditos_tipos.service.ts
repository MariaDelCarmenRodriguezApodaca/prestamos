import {Injectable} from '@angular/core';
//los metodos necesarios para hacer la peticion http
import {HttpClient} from '@angular/common/http';
//nuestro modelo de sucursales
import {Credito} from '../models/tipo_credito';
//configuraciones globales
import {GLOBAL} from './global';



@Injectable()
export class TiposCreditosService{

    public url:string;
    constructor(public _http:HttpClient){
        this.url=GLOBAL.url;
    }

    public getCreditos(){
        console.log(`se corrio getCreditos()`);
        return this._http.get(this.url+'tipos_creditos/get');
    }

    public addCreditos(credito:Credito){
        console.log('Se corrio addSucursal()');
        return this._http.post(this.url+`tipos_creditos/nuevo`,credito);
    }
    
    public updateCreditos(credito:Credito){
        console.log(`Se corrio updateCreditos()`);
        return this._http.put(this.url+`tipos_creditos/update/${credito.idcredito}`,credito);
    }

	
}