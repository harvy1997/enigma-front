export class PrestamoRequest {

    identificacionUsuario:String;
    isbn:String;
    tipoUsuario:number;
    
    constructor(identificacionUsuario:String | null | undefined,isbn:string | null | undefined,tipoUsuario:number | null | undefined){
        this.identificacionUsuario=identificacionUsuario ? identificacionUsuario:"";
        this.isbn=isbn? isbn:"";
        this.tipoUsuario=tipoUsuario?tipoUsuario:0;
    }
}
