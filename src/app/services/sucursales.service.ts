//importamos el metodo injectable para poder injectar el servicio
import {Injectable} from '@angular/core';
//los metodos necesarios para hacer la peticion http
import {HttpClient} from '@angular/common/http';
//nuestro modelo de sucursales
import {Sucursal} from '../models/sucursal';
//configuraciones globales
import {GLOBAL} from './global';



@Injectable()
export class SucursalesService{
    public url:string;
    constructor(public _http:HttpClient){
        this.url=GLOBAL.url;
    }

    public getSucursales(){
        console.log(`se corrio getSucursales()`);
        return this._http.get(this.url+'sucursales/get');
    }
    
}
