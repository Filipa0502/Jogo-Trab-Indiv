import { PlayerService } from './../../services/player.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  constructor(private redirecionar: Router, private player: PlayerService) { }

  ngOnInit(): void {
  }
/*------------------------entrar na arena-------------------*/
  entrarArena()
  {
    this.redirecionar.navigate(['/arena']);
  }

  /*---------------------entrar na loja---------------------*/
  entrarLoja()
  {
    this.redirecionar.navigate(['/loja']);
  }

  /*--------------------entrar para treinar------------------------*/
  entrarTreino()
  {
    this.redirecionar.navigate(['/treinar'])
  }



}
