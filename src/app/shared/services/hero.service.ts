import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  
  heros: Hero[] = [
    { name: 'Michel', hp: 330, hpMax: 500 },
    { name: 'Thierry', hp: 120, hpMax: 300 },
    { name: 'Jeanne', hp: 250, hpMax: 350 },
    { name: 'John', hp: 10, hpMax: 400 },
    { name: 'Chuck Norris', hp: Infinity, hpMax: Infinity },
  ];

  constructor() {}

  addHero(hero: Hero) {
    this.heros.push(hero);
  }

  removeHero(hero: Hero) {}

  updateHero(hero: Hero) {}
}
