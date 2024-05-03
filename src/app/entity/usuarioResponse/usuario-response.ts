export class UsuarioResponse {
    id_usuario:number;
    nombre:string;
    identificacionUsuario:string;

    constructor(id_usuario:number,nombre:string,identificacionUsuario:string){
        this.id_usuario=id_usuario;
        this.nombre=nombre;
        this.identificacionUsuario=identificacionUsuario;
    }

}
