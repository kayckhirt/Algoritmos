import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ConversorDecimalRomanoComponent } from './pages/conversor-decimal-romano/conversor-decimal-romano.component';
import { GeradorDeSenhaComponent } from './pages/gerador-de-senha/gerador-de-senha.component';
import { ElevadorComponent } from './pages/elevador/elevador.component';
import { FormsModule } from '@angular/forms';
import { VoltarParaHomeComponent } from './pages/home/voltar-para-home/voltar-para-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversorDecimalRomanoComponent,
    GeradorDeSenhaComponent,
    ElevadorComponent,
    VoltarParaHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
