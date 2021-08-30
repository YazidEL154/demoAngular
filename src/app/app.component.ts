import { Component, OnInit } from '@angular/core';
import { Hero } from './shared/models/hero';
import { HeroService } from './shared/services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
// implements OnInit pour indiquer à Angular d'appeler cette méthode
export class AppComponent implements OnInit {
  // déclenché à l'initialisation de la classe
  constructor(private heroService: HeroService) {
    console.log('constructor');
  }

  // déclenché à l'initialisation du composant
  ngOnInit(): void {
    console.log('init');
    this.heros = this.heroService.heros;
    console.log(this.heros);
  }

  newHero: Hero = { name: '', hp: 0, hpMax: 0 };
  heros: Hero[] = [];

  ajouterHero() {
    this.newHero.hp = this.newHero.hpMax;
    this.heroService.addHero(this.newHero);
  }
}
