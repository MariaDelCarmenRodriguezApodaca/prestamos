import {Component} from '@angular/core';
import { Empresa } from '../models/empresa';
import { EmpresasService } from '../services/empresas.service';
import { NgForm } from '@angular/forms';

@Component({
    selector:'empresa-nueva',
    templateUrl:'../templates/empresa_nueva.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[EmpresasService]
})
export class EmpresaNuevaComponent{
    public titulo:string;
    public nuevaEmpresa: Empresa;

    constructor(
        private _empresaService: EmpresasService
    ){
        this.titulo='Añadir una nueva Empresa'
        this.nuevaEmpresa = new Empresa (0,'','','');
    }

    ngOnInit(){
        console.log(this.titulo);
    }

    public addEmpresa(formulario:NgForm){
        console.log(formulario);
    }

    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevaEmpresa=new Empresa (0,'','','');
    }
}

// public idempresa:number,
// public razon_social:string,
// public direccion:string,
// public descripcion:string