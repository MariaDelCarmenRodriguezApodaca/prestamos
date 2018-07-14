export class Credito{
    constructor(
        public idcredito:number,
        public descripcion:string,
        public tipo_credito:string,
        public timepo:number,
        public interes_credito:number,
        public estado:number
    ){}
}