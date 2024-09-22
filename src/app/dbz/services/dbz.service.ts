import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 1000
  },{
    id: uuid(),
    name: "Vegeta",
    power: 9584
  }];

  addCharacter(character: Character):void{
    const newCharacter: Character = { ...character, id: uuid()}
    this.characters.push(newCharacter);
  }

  //  onDeleteCharacter(index:number){
 //  this.characters.splice(index,1);

   deleteCharacterById(id:string){
      this.characters = this.characters.filter(character => character.id !==id);
   }


}
