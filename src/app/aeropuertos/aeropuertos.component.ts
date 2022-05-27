import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AeroService, Modelo} from './Services/aero.service';

@Component({
  selector: 'app-aeropuertos',
  templateUrl: './aeropuertos.component.html',
  styleUrls: ['./aeropuertos.component.css']
})
export class AeropuertosComponent implements OnInit {
  Modelo: Modelo= {
    
    iataCode: '',
    ciudad: '',
    pais: '',
    }
    constructor(  private AeroService:AeroService, private router:Router ) { }

    ngOnInit(): void {
    }
  
    agregar(){
    
      delete this.Modelo.id;
     this.AeroService.addmodelo(this.Modelo).subscribe();
      this.router.navigate(['/listaaeropuerto']);
    }
  
  
}
