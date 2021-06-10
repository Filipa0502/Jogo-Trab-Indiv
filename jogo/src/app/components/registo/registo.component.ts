import { Component, OnInit } from '@angular/core';
import { RegistarService } from 'src/app/services/registar.service';

@Component({
  selector: 'app-registo',
  templateUrl: './registo.component.html',
  styleUrls: ['./registo.component.css']
})
export class RegistoComponent implements OnInit {


  ngOnInit(): void {
  }

  nome='';
  pass='';

  constructor(private reg : RegistarService) {}
  registar()
  {
    console.log(this.nome, this.pass)
    this.reg.registar(this.nome, this.pass).subscribe(
      data=>console.log(data)
    );
  }

}
