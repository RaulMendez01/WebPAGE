import { Component, OnInit } from '@angular/core';

import {AeroService, Modelo } from 'src/app/aeropuertos/Services/aero.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-aeroincial',
  templateUrl: './aeroincial.component.html',
  styleUrls: ['./aeroincial.component.css']
})
export class AeroincialComponent implements OnInit {
  ListarModelos!: Modelo[];

  constructor(private AeroService:AeroService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.AeroService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.AeroService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/iniciomodelo']);


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modficaraeropuerto/:iataCode/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agreagraeropuerto"])
    }
}