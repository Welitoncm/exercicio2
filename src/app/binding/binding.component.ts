import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Importe o FormsModule

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [FormsModule],  // Adicione o FormsModule aqui
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  numero1: number = 0;  // Armazena o primeiro número
  numero2: number = 0;  // Armazena o segundo número
  operacao: string = 'soma';  // Armazena a operação selecionada
  resultado: number | string = 0;  // Armazena o resultado da operação

  // Método para calcular o resultado
  calcular() {
    switch (this.operacao) {
      case 'soma':
        this.resultado = this.numero1 + this.numero2;
        break;
      case 'subtracao':
        this.resultado = this.numero1 - this.numero2;
        break;
      case 'multiplicacao':
        this.resultado = this.numero1 * this.numero2;
        break;
      case 'divisao':
        if (this.numero2 === 0) {
          this.resultado = 'Erro: Divisão por zero';
        } else {
          this.resultado = this.numero1 / this.numero2;
        }
        break;
      default:
        this.resultado = 'Operação inválida';
        break;
    }
  }
}
