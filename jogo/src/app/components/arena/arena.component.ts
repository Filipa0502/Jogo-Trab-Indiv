import { Router } from '@angular/router';
import { PlayerService } from './../../services/player.service';
import { JogadoresService } from './../../services/jogadores.service';
import { RegistarService } from 'src/app/services/registar.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arena',
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.css']
})
export class ArenaComponent implements OnInit {

  constructor(private redirecionar:Router,  private registarService: RegistarService, private jogadoresService: JogadoresService, private player: PlayerService) {}

  ngOnInit(): void {
  }

  personagem1: any;
  personagem2: any;

  voltarCidade()
  {
    this.redirecionar.navigate(['/cidade']);
  }

  /*------------------------------random jogador-----------------------*/

  /*getRandomJogador()
  {
    this.registarService.randomChar().subscribe((data) =>
      {
        this.player.player.name=data.nome;
        this.enemyService.player.id = data.ID;
        this.enemyService.player.atk = data.Atk;
        this.enemyService.player.isMonset = data.IsMonset;
        this.enemyService.player.int = data.Int;
      })

  }*/

  /*----------------------------batalha-------------------------*/
  //batalha(persongem1: HTMLElement, personagem2: HTMLElement)
  //{
        /*-------------atque da 1º personagem-------------*/

        /*--------------ataque da 2º personagem------------*/
  //}
}
