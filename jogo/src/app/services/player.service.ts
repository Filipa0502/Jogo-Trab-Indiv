import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor() { }

  player : any =
  {
    name: 'Erza',
    atk: ' ',
    isMonster: ' ',
    int: ' ',
    vida: ' '
  };

}
