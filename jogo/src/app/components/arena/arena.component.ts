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

  constructor(private registarService: RegistarService, private jogadoresService: JogadoresService, private player: PlayerService) { }

  ngOnInit(): void {
  }


  /*------------------------------random jogador-----------------------*/
  

}
