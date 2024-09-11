import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public control: boolean[]=[true,true];
  public nameArray: string[] = ['iroman','Hulk','Spiderman','Capitan America'];
  public name:string= this.nameArray[0];
  public age: number = 45;

  get capitalizeName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.control[0] = false;
    let nameHero = Math.floor(Math.random() * (this.nameArray.length));
    this.name = this.nameArray[nameHero];

  }

  changeAge():void{
    this.control[1] = false;
    let edad = Math.floor(Math.random() * (100 - 20 + 1)+20);
    this.age = edad;

  }

  resetForm():void{
    this.name = 'iroman';
    this.age = 45;
    this.control = [true,true];
  }

}
