import { Batalha } from './../../class/batalha';
import { Arma } from './../../class/arma';
import { Personagem } from './../../class/personagem';
import { Router } from '@angular/router';
import { RegistarService } from 'src/app/services/registar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private redirecionar:Router,  private registarService: RegistarService) {}

  voltarCidade()
  {
    this.redirecionar.navigate(['/cidade']);
  }

  ngOnInit(): void {
    /*this.getInimigo();
    this.getArma("me");
    this.getArma("him");*/
  }


/*
meuJogador : Personagem;
minhaArma : Arma;

meuInimigo : Personagem;
hisWeapon : Arma;

batalha : Batalha;

getInimigo()
{
 let result;
  this.registarService.getInimigo().subscribe(data =>{result = data;console.log(data);this.meuInimigo = new Personagem(result.data.Nome,result.data.Atk,result.data.Int,result.data.Vida);console.log(this.meuInimigo)});
}

getArma(how: string)
{
let result;
let result2;

if(how == "me")
{
    this.registarService.getArma().subscribe(data=>{result = data;console.log(data);this.minhaArma = new Arma(result.data.nome,result.data.Atk,result.data.Durabilidade,result.data.TipoDeArma);console.log(this.minhaArma)});
}

if(how=="him")
{
  this.registarService.getArma().subscribe(data=>{result2 = data;console.log(data);this.hisWeapon= new Arma(result2.data.nome,result2.data.Atk,result2.data.Durabilidade,result2.data.TipoDeArma);console.log(this.hisWeapon);this.batalha = new Batalha(this.meuJogador,this.meuInimigo,this.minhaArma,this.hisWeapon);});
}

}


BattleStarts()
{

let resposta = this.batalha.atacar();

if(resposta=="continua")
{
   let rep= this.batalha.atacar("Outra vez");
   if(rep=="p-win")
   {
      alert(`${this.meuJogador.nome} Ganhou`);
   } else {
    alert(`${this.meuInimigo.nome} Perdeu`);
   }
}
else if(resposta=="p-win")
{
  alert(`${this.meuJogador.nome} Ganhou`);
}else {
  alert(`${this.meuInimigo.nome} Perdeu`);
 }

}
*/

}
