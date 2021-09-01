import { Component, OnInit } from '@angular/core';
import { CatService } from '../shared/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
export class CatsComponent implements OnInit {
  cat!: any;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    // appel du service pour récupérer l'observable de la requette API
    this.catService.getCat().subscribe((cat: any) => {
      // au changement de valeur (notification de l'observable)
      // on change la valeur de cat du composant
      this.cat = cat[0]; // l'api retourne un tableau donc il faut extraire la valeur de ce tableau
      console.log(cat[0]);
    });
  }
}
