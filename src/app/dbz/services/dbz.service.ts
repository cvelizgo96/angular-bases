import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  // Lista original de personajes
  private originalCharacters: Character[] = [];

  // Lista que se muestra y se puede filtrar
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

  constructor() {
    // Guardamos la lista original al crear el servicio
    this.originalCharacters = [...this.characters];
  }

  // Agregar personaje a la lista
  addCharacter(character: Character): void {
    const newCharacter: Character = { ...character, id: uuid() };
    this.characters.push(newCharacter);
    this.originalCharacters = [...this.characters]; // También agregamos a la lista original
  }

  // Eliminar personaje por ID
  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
    this.originalCharacters = [...this.characters];
  }

  // Filtrar personajes según el nombre (ignorando mayúsculas y minúsculas)
  filterListHeores(hero: string): void {
    const heroLower = hero.toLowerCase();
    // Filtramos desde la lista original para no perder datos
    this.characters = this.originalCharacters.filter(character =>
      character.name.toLowerCase().includes(heroLower) ||   character.power.toString().includes(heroLower)
    );
  }
}
