import { JogadoresService } from './../../services/jogadores.service';
import { RegistarService } from 'src/app/services/registar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private registarService: RegistarService, private jogadoresService: JogadoresService, private redirCidade: Router) { }

  ngOnInit(): void {
  }

  login(user: string, pass: string, inputUser: HTMLInputElement, inputPass: HTMLInputElement)
  {
    this.registarService.login(user, pass).subscribe(data =>
      {
        this.jogadoresService.user = inputUser.value;
        this.jogadoresService.pass = inputPass.value;
        this.redirCidade.navigate(['cidade']);
      });
  }

}
