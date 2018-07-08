import {Component} from '@angular/core';
@Component({
    selector:'empresa',
    templateUrl:'../templates/empresas.component.html',
    styleUrls:['../styles/styles.css']
})
export class EmpresaComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente de Empresa'
    }
}