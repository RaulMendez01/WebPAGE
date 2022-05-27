
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BoletoService, Boleto } from 'src/app/SERVICES/boleto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
 //variable
  //variable
  Listarboletos!: Boleto[];
  constructor(private BoletoService:BoletoService, private router:Router) { }

  ngOnInit(): void {
    this.listarboletos();
  }
  listarboletos(){
    this.BoletoService.getBoletos().subscribe(
      res=>{
        console.log(res)
        this.Listarboletos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id_persona:string){
    this.BoletoService.eliminarboleto(id_persona).subscribe(
      res=>{
        console.log('Eliminado');
        this.Listarboletos;
        this.router.navigate(['/add']);


      },
      err=> console.log(err));
  }

  

  modificar(id_persona:string){
    this.router.navigate(['/edit/'+id_persona])
  }



  
  Onnuevo(){
  this.router.navigate(["persona"])
  }

 
 

  



}
