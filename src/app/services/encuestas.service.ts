//importamos el metodo injectable para poder injectar el servicio
import {Injectable} from '@angular/core';
//los metodos necesarios para hacer la peticion http
import {HttpClient} from '@angular/common/http';
//nuestro modelo de clientes
import {Encuesta} from '../models/encuesta';
//configuraciones globales
import {GLOBAL} from './global';

@Injectable()
export class EncustaService{
    public url:string;
    constructor(public _http:HttpClient){
        this.url=GLOBAL.url;
    }

    public gteEncuestas(){
        console.log(`se corrio getEncuestas()`);
        return this._http.get(this.url+'encuestas/get');
    }
    
    public gteEncuestasPendientes(){
        console.log(`se corrio getEncuestas()`);
        return this._http.get(this.url+'encuestas/get_pendientes');
    }
    public gteEncuestasTerminadas(){
        console.log(`se corrio getEncuestas()`);
        return this._http.get(this.url+'encuestas/get_terminadas');
    }
    public updateEncuesta(encuesta:Encuesta){
        console.log(`Se corrio updateEmpresa()`);
        return this._http.put(this.url+`encuestas/update/${encuesta.idencuesta}`,encuesta);
    }
    
}