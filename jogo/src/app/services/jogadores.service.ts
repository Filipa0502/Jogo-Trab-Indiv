import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadoresService {

  constructor() { }

  pass: any;
  user: any;

  jogadorID: any;

  player: any = {
    name: "login",
    id: "",
    atk: "0",
    isMonset: "",
    int: "0",
    lp: "0",
    img: "",
    idPlayer: "",
    weapon: "punch"
  };

}
