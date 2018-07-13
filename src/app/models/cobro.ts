export class Cobro{
    constructor(
        public idcobro:number,
        public idcredito:number,
        public idcliente:number,
        public idempleado:number,
        public fecha_cobro:string,
        public cantidad_cobro:number,
        public comentario_cobro:string,
        public imagen_cobro:string
    ){}
}