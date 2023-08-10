import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor-decimal-romano',
  templateUrl: './conversor-decimal-romano.component.html',
  styleUrls: ['./conversor-decimal-romano.component.css']
})
export class ConversorDecimalRomanoComponent {
  public algRomano: string = '';
  public decimal: number = 0;
  constructor() { }

  verificaAlgRomano(algRomano: string): any {
    algRomano = algRomano.toLowerCase();
    return algRomano === '' || /^(i|v|x|l|c|d|m)+$/.test(algRomano);
  }

  verificarDecim(decimal:any) {
    return decimal === 0 || /^[0-9]+$/.test(decimal);
  }

  converteAlg(algRomano: string): any {
    const tabelaRomano: any = {
      i: 1,
      v: 5,
      x: 10,
      l: 50,
      c: 100,
      d: 500,
      m: 1000
    }
    algRomano = algRomano.toLowerCase();
    let arrayRom = algRomano.split('')
    const valor = arrayRom.reduce((acum, valoratual, i) => {
      const valorAtual = tabelaRomano[valoratual];
      const proximoValor = tabelaRomano[arrayRom[i + 1]];
      if (valorAtual < proximoValor) {
        return acum - valorAtual;
      }
      return acum + valorAtual;

    }, 0)
    return valor;
  }

  converter() {
    return this.converteAlg(this.algRomano);
  }
  converterDec() {
    return this.convertDec(this.decimal);
  }


  convertDec(decimal: number): any {
    const tabelaRomano: any = {
      m: 1000,
      cm: 900,
      d: 500,
      cd: 400,
      c: 100,
      xc: 90,
      l: 50,
      xl: 40,
      x: 10,
      ix: 9,
      v: 5,
      iv: 4,
      i: 1
    }
    let algaRomano = '';
    for (let key in tabelaRomano) {
      while (decimal >= tabelaRomano[key]) {
        algaRomano += key;
        decimal -= tabelaRomano[key];
      }
    }
    return algaRomano.toUpperCase();
  }
}
