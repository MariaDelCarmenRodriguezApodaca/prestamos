//el metodo injectable para poder injectar el servicio a un componente
import { Injectable } from '@angular/core';
//los metodos necesarios para hacer la peticion http
import { Http, Response, Headers, RequestOptions } from '@angular/http';
//los metodos para mapear nuestra peticion
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; 
//nuestro modelo de produducto
import { Empleado } from '../models/empleado';
//las configuraciones globales que creamos
import { GLOBAL } from './global';
//usamos el decorador injectable

@Injectable()
export class EmpleadosService{

	public url:string;

	constructor(
		public _http:Http
	){
		this.url = GLOBAL.url;
	}

	public getEmpleado(){
		console.log('se corrio getEmpleado()');
		return this._http.get(this.url+'empleados/get').pipe((map(res => res.json())));
	}


	public addEmpleado(producto:Empleado){
		//convertimos el objeto producto en json
		let json = JSON.stringify(producto);
		//definimos el parametro que se enviara en la peticio
		let params= json;
		console.log(params);
		//definimos los headers: 
		//es como nuestro backen procesa la informacion que recivira por post:
		let headers = new Headers({'Content-type': 'application/x-www-form-urlencoded'}); 
		//utilizamos el servicio http de agular y utilizamos el metodo post
		return this._http.post(this.url+'empleados', params, {headers:headers}).pipe(map( res => res.json()));
	}
}
