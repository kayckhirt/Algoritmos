import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voltar-para-home',
  templateUrl: './voltar-para-home.component.html',
  styleUrls: ['./voltar-para-home.component.css']
})
export class VoltarParaHomeComponent {

  constructor(public router:Router) {}
}
