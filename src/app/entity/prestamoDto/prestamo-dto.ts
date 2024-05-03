export class PrestamoDto {
    idPrestamo:number;
    fechaInicio:string;
    fechaMaximaEntrega:string;
    fechaEntrega:string;
    idLibro:number;
    nombreLibro:string;
    isbn:string;
    constructor(idPrestamo:number,fechaInicio:string,fechaMaximaEntrega:string,fechaEntrega:string,idLibro:number,nombreLibro:string,isbn:string){
        this.idPrestamo=idPrestamo;
        this.fechaInicio=fechaInicio;
        this.fechaMaximaEntrega=fechaMaximaEntrega;
        this.fechaEntrega=fechaEntrega;
        this.idLibro=idLibro;
        this.nombreLibro=nombreLibro;
        this.isbn=isbn;
        
    }
}
