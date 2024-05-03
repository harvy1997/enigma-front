import { Libro } from "../libro/libro";
import { Usuario } from "../usuario/usuario";

export class PrestamoResponse {
    
    id:number;
    fechaMaximaDevolucion:string;
  

    constructor(id:number,fechaMaximaDevolucion:string){
        this.id=id;
        this.fechaMaximaDevolucion=fechaMaximaDevolucion;

    }
}
