import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../shared/models/hero';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css'],
})
export class StatusBarComponent implements OnInit {
  // renseignement des variables que le composant accepte en entrée
  // attention aux imports ! (Input de @angular/core)
  // le "!" indique à TS que le hero sera assigné au runtime
  @Input() hero!: Hero;

  constructor() {}

  ngOnInit(): void {}

  perdreHp(nb: number) {
    this.hero.hp -= nb;
  }
}
