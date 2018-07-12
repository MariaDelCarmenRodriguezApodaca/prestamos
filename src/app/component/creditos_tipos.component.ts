import {Component} from '@angular/core';

@Component({
	selector:'creditos-lista',
	templateUrl:'../templates/creditos_tipos.component.html'
})

export class CreditosTiposComponent{
	public titulo:string

	constructor(){
		this.titulo='Se arranco el componente cretidosTiposCompoenent';
	}
	ngOnInit(){
		
	}
}