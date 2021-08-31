import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';
import { HeroService } from '../shared/services/hero.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

<<<<<<< HEAD
  constructor(private heroService: HeroService) { console.log('constructor');}

  newHero: Hero = { name: '', hp: 0, hpMax: 0 };
  heros: Hero[] = [];
  
  ngOnInit(): void {
    this.heros = this.heroService.heros;
    console.log(this.heros);
  }

  ajouterHero() {
=======
  newHero: Hero = { name: '', hp: 0, hpMax: 0 };
  heros: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heros = this.heroService.heros;
  }

  ajouterHero(): void {
>>>>>>> de4e8211803df078e821c9013a08aa24aa52ef27
    this.newHero.hp = this.newHero.hpMax;
    let hero = this.newHero;
    this.heroService.addHero(hero);
    this.newHero = { name: '', hp: 0, hpMax: 0 };
  }
<<<<<<< HEAD
=======

>>>>>>> de4e8211803df078e821c9013a08aa24aa52ef27
}
