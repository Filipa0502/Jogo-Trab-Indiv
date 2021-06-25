import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistoComponent } from './components/registo/registo.component';
import { FormsModule } from '@angular/forms';
import { CidadeComponent } from './components/cidade/cidade.component';
import { ArenaComponent } from './components/arena/arena.component';
import { LojaComponent } from './components/loja/loja.component';
import { TreinarComponent } from './components/treinar/treinar.component';
import { ErroComponent } from './components/erro/erro.component';
import { CriarArmaComponent } from './components/criar-arma/criar-arma.component';
import { CriarPersonagemComponent } from './components/criar-personagem/criar-personagem.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistoComponent,
    CidadeComponent,
    ArenaComponent,
    LojaComponent,
    TreinarComponent,
    ErroComponent,
    CriarArmaComponent,
    CriarPersonagemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
