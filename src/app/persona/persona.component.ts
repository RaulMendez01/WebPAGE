import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router';
import {BoletoService, Boleto } from 'src/app/SERVICES/boleto.service';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
   Boleto: Boleto= {
    id_persona:'',
    nombres:'',
    apellidos:'',
    tipo_doc:'',
    numero_doc:''
  }
  constructor(private BoletoService:BoletoService, private router:Router) { }

  ngOnInit(): void {
}
agregar(){
  delete this.Boleto.id_persona;

  this.BoletoService.addboleto(this.Boleto).subscribe();
  this.router.navigate(['/inicio']);
}



}
