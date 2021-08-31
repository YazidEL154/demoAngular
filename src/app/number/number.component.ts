import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { ActivatedRoute, Router } from '@angular/router';
>>>>>>> de4e8211803df078e821c9013a08aa24aa52ef27

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
  number!: number;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // ActivatedRoute nous permet d'accéder aux différent attributs et méthodes pour la navigation
    // this.number = this.router.snapshot.params.number;

    // même principe en mode asynchrone, permet de lire en permanence le paramètre d'url
    this.router.params.subscribe(params => {
      this.number = params.number
    })
>>>>>>> de4e8211803df078e821c9013a08aa24aa52ef27
  }

}
