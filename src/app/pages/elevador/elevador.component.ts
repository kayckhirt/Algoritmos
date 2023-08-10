import { Component } from '@angular/core';
@Component({
  selector: 'app-elevador',
  templateUrl: './elevador.component.html',
  styleUrls: ['./elevador.component.css']
})
export class ElevadorComponent {
  andarAtual = 1;
  andarAlvo: number = 1;
  selecaoAndares: any = [];
  portaAberta: boolean = false;
  intervalo: any;
  constructor() {
    this.ligarElevador()
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  reset(){
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      if (this.selecaoAndares.length === 0 && this.andarAtual !== 1) {
        this.andarAlvo = 1;
        this.ligarElevador();
      }
    }, 16000);
  }


  async ligarElevador() {
  let funcionando = true
  while (funcionando) {
    if (this.selecaoAndares.length === 0 && this.andarAtual === this.andarAlvo) {
      funcionando = false;
      this.reset()
    } else {
      funcionando = true;
    }
    await this.sleep(3000)
    if (this.andarAtual < this.andarAlvo) {
      this.andarAtual = this.andarAtual + 1
    }
    if (this.andarAtual > this.andarAlvo) {
      this.andarAtual = this.andarAtual - 1;
    }
    if (this.andarAtual === this.andarAlvo &&
      this.selecaoAndares.length > 0) {
        this.andarAlvo = this.selecaoAndares.shift()
      }
  }
  this.abrirPorta()
}

chamarParaCima(andar: number): any {
  if (this.andarAtual === andar) {
    this.abrirPorta()
  }
  if (this.selecaoAndares.length === 0) {
    this.andarAlvo = andar
    return this.ligarElevador()
  }
  if (this.andarAlvo < andar) {
    this.andarAlvo = andar;
  } else {
    this.selecaoAndares.push(andar);
  }
  if (this.selecaoAndares.length === 0 && this.andarAlvo == this.andarAtual) {
    return this.ligarElevador()
  }
}

chamarParaBaixo(andar: number): any {
  if (this.andarAtual == andar) {
    this.abrirPorta()
  }
  if (this.selecaoAndares.length === 0) {
    this.andarAlvo = andar
    return this.ligarElevador()
  }
  if (this.andarAlvo > andar) {
    this.andarAlvo = andar;
  } else {
    this.selecaoAndares.push(andar);
  }
  if (this.selecaoAndares.length === 0 && this.andarAlvo == this.andarAtual) {
    return this.ligarElevador()
  }
}

definirAndar(andar: number) {
  if (this.andarAtual === andar) {
  }
  if (andar >= 1) {
    if (this.selecaoAndares.length === 0) {
      this.selecaoAndares.push(andar);
      this.andarAlvo = this.selecaoAndares[0];
      this.ligarElevador();
      this.portaAberta = false;
    } else {
      this.selecaoAndares.push(andar);
    }
  }
  this.ligarElevador()
}

SomChegando() {
  let audio = new Audio();
  audio.src = "assets/som-de-elevador.mp4";
  audio.load();
  audio.play();
}

abrirPorta() {
  this.portaAberta = true
  this.SomChegando()
}

}
