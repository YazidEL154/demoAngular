import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HeroService } from '../shared/services/hero.service';
import { StatusBarComponent } from './status-bar/status-bar.component';

import { StatusComponent } from './status.component';

describe('StatusComponent', () => {
  let component: StatusComponent;
  let fixture: ComponentFixture<StatusComponent>;
  // propriété pour injecter le service
  let service: HeroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatusComponent, StatusBarComponent],
      imports: [FormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // injection du service
    service = TestBed.inject(HeroService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // mon composant StatusComponent
  // devrait pouvoir ajouter un héro
  it('should add a hero', () => {
    // change le new Hero (ce qui devrais venir du formulaire)
    let michel = { name: 'Michel', hp: 0, hpMax: 0 };
    component.newHero = michel;
    // appel de ajouterHero() qui ajoute le héro dans le service
    component.ajouterHero();
    expect(service.heros).toContain(michel);
  });

  it("should clear form after submit", ()=>{
    let michel = { name: 'Michel', hp: 0, hpMax: 0 };
    component.newHero = michel;
    component.ajouterHero();
    expect(component.newHero).toEqual({name:"", hp:0, hpMax:0});
  })
});
