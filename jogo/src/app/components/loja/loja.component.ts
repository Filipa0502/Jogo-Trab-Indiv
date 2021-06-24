import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {

  constructor(private redirecionar: Router) { }

  ngOnInit(): void {
  }
  voltarCidade()
  {
    this.redirecionar.navigate(['/cidade']);
  }

  equipEspada(espada: HTMLElement)
  {

  }
}
