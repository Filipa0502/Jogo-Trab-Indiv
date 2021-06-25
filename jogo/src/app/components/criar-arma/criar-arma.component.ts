import { RegistarService } from 'src/app/services/registar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-arma',
  templateUrl: './criar-arma.component.html',
  styleUrls: ['./criar-arma.component.css']
})
export class CriarArmaComponent implements OnInit {

  constructor(private registarService:RegistarService ) { }

  ngOnInit(): void {
  }

    /*-----coloquei totas as variaveis a string porque a number dava erro------*/
  nome: string = "";
  atk: string = "";
  durabilidade: string = "";
  tipoArma: string = "";
  vida: string="";

  resultado: any;

  criarArma()
  {
    console.log("criar");
    this.registarService.createArma(this.nome,this.atk,this.durabilidade,this.tipoArma,this.vida).subscribe(data => {this.resultado=data;console.log(this.resultado);});
  }


}
