import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name:string = "ironman"
  public age:number = 45;

  cambiarNombre(){
    this.name = 'spiderman';
  }

  cambiarEdad(){
    this.age = 17;
  }
}
