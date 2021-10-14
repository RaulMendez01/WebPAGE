import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router:Router) {

  }

  ngOnInit(): void {
  }

  Onnavegar(){
    this.router.navigate(["persona"])

  }


  Onrutas(){
    this.router.navigate(["ruta"])

  }

  Onvuelo(){
    this.router.navigate(["vuelo"])

  }
  Onregsitro(){
    this.router.navigate(["registro"])

  }

  Oncancelar(){
    this.router.navigate(["cancelar"])

  }


Onaerolinea(){
  this.router.navigate(["aerolinea"])
}

}
