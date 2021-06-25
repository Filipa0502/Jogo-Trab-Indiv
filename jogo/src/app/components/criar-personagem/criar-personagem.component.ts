import { RegistarService } from 'src/app/services/registar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-personagem',
  templateUrl: './criar-personagem.component.html',
  styleUrls: ['./criar-personagem.component.css']
})
export class CriarPersonagemComponent implements OnInit {

  constructor(private registraService : RegistarService) { }

  ngOnInit(): void {
  }

  /*-----coloquei totas as variaveis a string porque a number dava erro------*/
  nome: string ="";
  atk : string ="";
  inteligencia: string ="";
  vida: string="";

  resultado : any;

  criarPersonagem()
  {
    console.log("criar");

    this.registraService.createPersonagem(this.nome,this.atk,this.inteligencia,this.vida).subscribe(data => {this.resultado=data;console.log(this.resultado)});

  }
}


