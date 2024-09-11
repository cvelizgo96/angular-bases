import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNameSecunday: string[] = ['Spidrman','Iroman','She Hulk','Capitan América'];
  public heroName: string[] = [...this.heroNameSecunday];
  public deleteHero?: string;

  deleteHeroes():void{
    this.deleteHero = this.heroNameSecunday.pop();
  }

  reset():void{

    console.log(this.heroNameSecunday.length);
    this.heroNameSecunday.splice(0,this.heroNameSecunday.length);
    this.heroNameSecunday = [...this.heroName];
    this.deleteHero = "";
  }
}
