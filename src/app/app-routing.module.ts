import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConversorDecimalRomanoComponent } from './pages/conversor-decimal-romano/conversor-decimal-romano.component';
import { GeradorDeSenhaComponent } from './pages/gerador-de-senha/gerador-de-senha.component';
import { ElevadorComponent } from './pages/elevador/elevador.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conversor-dec-rom', component: ConversorDecimalRomanoComponent},
  {path: 'gerador-senha', component: GeradorDeSenhaComponent},
  {path: 'elevador', component: ElevadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
