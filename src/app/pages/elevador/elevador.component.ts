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
  portaAberta: boolean = true;
  intervalo: any;
  constructor() {
    this.ligarElevador()
  }

  sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  reset() {
    clearInterval(this.intervalo);
    this.intervalo = setInterval(() => {
      if (this.selecaoAndares.length === 0 && this.andarAtual !== 1) {
        this.andarAlvo = 1;
        this.portaAberta = false;
        this.ligarElevador();
      }
    }, 20000);
  }


  async ligarElevador() {
    let funcionando = true
    while (funcionando) {
      if (this.selecaoAndares.length === 0 && this.andarAtual === this.andarAlvo) {
        funcionando = false;
        this.portaAberta = true;
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
      if (this.andarAlvo === this.andarAtual) {
        this.abrirPorta()
      }
    }
  }

  chamarParaCima(andar: number): any {
    if (this.andarAtual === andar) {
      this.abrirPorta();
    }
    else {
      this.portaAberta = false;
    }
    if (andar) {
      this.selecaoAndares.push(andar)
      this.portaAberta = false
    }
    if (this.andarAlvo < andar) {
      this.andarAlvo = andar;
    } else {
      this.selecaoAndares.push(andar);
    }
    return this.ligarElevador()
  }

  chamarParaBaixo(andar: number): any {
    if (this.andarAtual == andar) {
      this.abrirPorta()
    }
    else {
      this.portaAberta = false;
    }
    if (andar) {
      this.portaAberta = false
      this.selecaoAndares.push(andar);
    }
    if (this.andarAlvo > andar) {
      this.andarAlvo = andar;
    } else {
      this.selecaoAndares.push(andar);
    }
    return this.ligarElevador()
  }

  definirAndar(andar: number) {
    if (this.andarAtual === andar) {
      this.abrirPorta()
    }
    else {
      this.portaAberta = false;
    }
    if (andar) {
      this.portaAberta = false
      this.selecaoAndares.push(andar);
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
