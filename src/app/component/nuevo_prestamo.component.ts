import {Component} from '@angular/core'; 
import {Prestamo} from '../models/prestamo';
import {PrestamosService} from '../services/prestamos.service';
import {NgForm} from '@angular/forms';


@Component({
    selector:'nuevo-prestamo',
    templateUrl:'../templates/nuevo_prestamo.component.html',
    styleUrls:['../styles/styles.css'],
    providers:[PrestamosService]
})
export class NuevoPrestamoComponent{
    public titulo:string;
    public nuevosprestamos:Prestamo;


    constructor(
        private _prestamosService:PrestamosService
    ){
        this.titulo='Añadir un Nuevo Prestamo'
        this.nuevosprestamos = new Prestamo(0,0,0,0,'',0,0,0,0,0,'','',0,0,0);
    }

    ngOnInit() {
       console.log(this.titulo);
    }  
 
    public addPrestamo(formulario:NgForm){
        console.log(formulario);
    }

    public limpiarForm(form:NgForm){
        form.reset();
        this.nuevosprestamos=new Prestamo (0,0,0,0,'',0,0,0,0,0,'','',0,0,0);
    }


}