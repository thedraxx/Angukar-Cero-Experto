import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <div>
    <h1>Contador</h1>
    <p>Valor actual: <span id="contador">
        {{ contador }}
      </span>
    </p>
    <button (click)="acumular(5)">Incrementar</button>
    <button (click)="decrementar()">Decrementar</button>
    <button (click)="reset()">Reset</button>
  </div>

  `
})

export class CounterComponent {
    title = 'bases angular';
    contador=10;

    acumular(valor: number){
      this.contador+=valor;
    }

    decrementar(){
      this.contador--;
    }

    reset(){
      this.contador = 10;
    }
}
