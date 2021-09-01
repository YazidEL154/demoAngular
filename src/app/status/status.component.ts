import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  newHero: Hero = { name: '', hp: 0, hpMax: 0 };
  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heros = this.heroService.heros;
  }

  ajouterHero(): void {
    this.newHero.hp = this.newHero.hpMax;
    let hero = this.newHero;
    this.heroService.addHero(hero);
    this.newHero = { name: '', hp: 0, hpMax: 0 };
  }
}
