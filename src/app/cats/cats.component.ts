import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CatService } from '../shared/services/cat.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css'],
})
// attention aux implémentations
export class CatsComponent implements OnInit, OnDestroy {
  
  cat!: any;

  catSub?: Subscription;

  constructor(private catService: CatService) {}

  // méthodes déclenchées à l'initialisation du composant (aprés le constructeur, quand le DOM est généré)
  ngOnInit(): void {
    // appel du service pour récupérer l'observable de la requette API
    this.catSub = this.catService.getCat().subscribe((cat: any) => {
      // au changement de valeur (notification de l'observable)
      // on change la valeur de cat du composant
      this.cat = cat[0]; // l'api retourne un tableau donc il faut extraire la valeur de ce tableau
    });
  }

  // méthodes déclenchées quand le composant est "détruit"
  ngOnDestroy(): void {
    if(this.catSub){
      // Pas necessaire içi car Angular gére le unsubscribe des observables qui viennent d'HTTP
      this.catSub.unsubscribe();
    }
  }

}
