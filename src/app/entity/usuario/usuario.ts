import { TipoUsuario } from "../tipoUsuario/tipo-usuario";

export class Usuario {
    id_usuario:number;
    nombre:string;
    identificacion:string;
    tipoUsuario:TipoUsuario;

    constructor(id_usuario:number,nombre:string,identificacion:string,tipoUsuario:TipoUsuario){
        this.id_usuario=id_usuario;
        this.nombre=nombre;
        this.identificacion=identificacion;
        this.tipoUsuario=tipoUsuario
    }
}
