import { TreinarComponent } from './components/treinar/treinar.component';
import { CidadeComponent } from './components/cidade/cidade.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistoComponent } from './components/registo/registo.component';
import { ArenaComponent } from './components/arena/arena.component';
import { LojaComponent } from './components/loja/loja.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login", component:LoginComponent},
  {path:"registar", component:RegistoComponent},
  {path:"cidade", component:CidadeComponent},
  {path:"arena", component:ArenaComponent},
  {path:"loja", component:LojaComponent},
  {path:"treinar", component:TreinarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
