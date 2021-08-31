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

  number: number = 7;

  // déclenché à l'initialisation de la classe
  constructor(private heroService: HeroService) {
    console.log('constructor');
  }

  // déclenché à l'initialisation du composant
  ngOnInit(): void {
    console.log('init');
  }


}
