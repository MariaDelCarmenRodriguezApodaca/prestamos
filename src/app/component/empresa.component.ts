import {Component} from '@angular/core'; 
import {Empresa} from '../models/empresa';
import {EmpresasService} from '../services/empresas.service';

@Component({
    selector:'empresa',
    templateUrl:'../templates/empresas.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[EmpresasService]
})
export class EmpresaComponent{
    public titulo:string;
    public empresas:Array<Empresa>;

    constructor(
        private _empresasService:EmpresasService
    ){
        this.titulo='Se arranco el componente de Empresa'
    }

    ngOnInit(){
        console.log(this.titulo);
        this._empresasService.getEmpresas().subscribe(
            result=>{
                if(result.result){
                    this.empresas=result.result;
                    console.log(this.empresas);
                }else{
                    console.log(result);
                }
            },
            err=>{
                console.log(<any>err);
            }
        )
    }
}