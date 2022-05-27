import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BoletoService {
url="http://localhost:3000/Personas"

  constructor(private http:HttpClient) { }

  getBoletos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunboleto(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //Crear
  addboleto(boleto:Boleto){
    return this.http.post(this.url, boleto);

  }

  //eliminar
  eliminarboleto(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editboleto(id:string, boleto:Boleto){
    return this.http.put(this.url+'/'+id,boleto);

  }

}

export interface Boleto{
  id_persona?:any;
  nombres: string;
  apellidos: string;
  tipo_doc: string;
  numero_doc: string;
}


