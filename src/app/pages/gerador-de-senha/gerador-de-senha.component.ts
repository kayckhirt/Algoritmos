import { Component } from '@angular/core';



@Component({
  selector: 'app-gerador-de-senha',
  templateUrl: './gerador-de-senha.component.html',
  styleUrls: ['./gerador-de-senha.component.css']
})
export class GeradorDeSenhaComponent {
  quantidadeCarac: number = 0;
  senha: string = '';
  copiado: boolean = false;
  senhaboa: string = '';
  forcaSenha:number = 0;

  checkboxes: {
    label: string,
    checked: boolean,
    values: string[]
  }[] = [
      {
        label: 'Letra Maiúscula',
        checked: false,
        values: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      },
      {
        label: 'Letra Minúscula',
        checked: false,
        values: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
          'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      },
      {
        label: 'Números',
        checked: false,
        values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      },
      {
        label: 'Símbolos',
        checked: false,
        values: ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-']
      },
      {
        label: 'Emojis',
        checked: false,
        values: ['🤠', '🤓', '🤡', '👽', '🧠', '👀']
      }
    ];

  constructor() { }

  senhaGerada() {
    this.senha = this.gerarSenhas(this.quantidadeCarac)
  }

  copiarSenha() {
    const textarea = document.createElement('textarea');
    if (this.senha.length > 0) {
      textarea.value = this.senha;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    this.copiado = true;
  }

  gerarSenhas(quantidadeCarac: number) {
    const caracteres: string[] = [];
    let senha = '';

    this.checkboxes.forEach(checkbox => {
      if (checkbox.checked) {
        caracteres.push(...checkbox.values);
        senha += checkbox.values[Math.floor(Math.random() * checkbox.values.length)];
      }
    });

    for (let i = senha.length; i <= quantidadeCarac; i++) {
      senha += caracteres[Math.floor(Math.random() * caracteres.length)];
    }

    return senha;
  }

  forcaDaSenha() {
    this.forcaSenha = 0;
    console.log(this.senha)
    this.checkboxes.forEach(checkbox => {
      if (checkbox.checked) {   
        this.forcaSenha ++;
      }
    });
    if (this.forcaSenha === 5 && this.senha.length >= 8){
      this.senhaboa = 'Senha Muito Forte!'
    }
    else if(this.forcaSenha === 4 && this.senha.length >= 8){
      this.senhaboa = 'Senha Forte!'
    }
    else if(this.forcaSenha == 3 && this.senha.length >= 6){
      this.senhaboa = 'Senha Mediana'
    }
    else if(this.forcaSenha == 2 && this.senha.length <= 6){
      this.senhaboa = 'Senha Fraca'
    }
    else {
      this.senhaboa = 'Senha Fraca'
    }
  }
}


