
import { Boleto, BoletoService } from 'src/app/SERVICES/boleto.service';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  Boleto: Boleto = {
    id_persona: '',
    nombres: '',
    apellidos: '',
    tipo_doc: '',
    numero_doc: ''
  }

  constructor(private BoletoService:BoletoService, private router:Router, private ActiveRoute:ActivatedRoute) { }
  ngOnInit(): void {

    const id_entrada = <string>this.ActiveRoute.snapshot.params.id_persona;

    console.log('Id de entrada:' + id_entrada);

    if (id_entrada) {
      this.BoletoService.getunboleto(id_entrada).subscribe(
        (res: any) => {

          this.Boleto = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }


  }
 
  modificar() {
    this.BoletoService.editboleto(this.Boleto.id_persona, this.Boleto).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );
      this.router.navigate(['inicio'])

  }
 

}
 

