//importamos el metodo injectable para poder injectar el servicio
import {Injectable} from '@angular/core';
//los metodos necesarios para hacer la peticion http
import {Http, Response, Headers, RequestOptions} from '@angular/http';
//los metodos para mapear y suscribirnos a nuestra peticion
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
//nuestro modelo de clientes
import {Empresa} from '../models/empresa';
//configuraciones globales
import {GLOBAL} from './global';

@Injectable()
export class EmpresasService{
    public url:string;
    constructor(public _http:Http){
        this.url=GLOBAL.url;
    }

    public getEmpresas(){
        console.log(`se corrio getEmpresas()`);
        return this._http.get(this.url+'empresas/get').pipe((map(res=>res.json())));
    }
    
}
