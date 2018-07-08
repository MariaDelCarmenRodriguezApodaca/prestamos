import {Component} from '@angular/core';
@Component({
    selector:'empresa-nueva',
    templateUrl:'../templates/empresa_nueva.component.html',
    styleUrls:['../styles/styles.css']
})
export class EmpresaNuevaComponent{
    public titulo:string;
    constructor(){
        this.titulo='Se arranco el componente de Empresa Nueva'
    }
}