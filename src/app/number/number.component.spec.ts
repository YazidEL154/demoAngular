import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NumberComponent } from './number.component';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;
  let routeService: ActivatedRoute;

  beforeEach(async () => {
    // configuration des modules de test (propre à Angular)
    await TestBed.configureTestingModule({
      declarations: [ NumberComponent ],
      // RouterTestingModule pour simuler la navigation (changement d'URL)
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComponent);
    // injection de la dépendance activated route (pour tester le changement dans l'url)
    routeService = TestBed.inject(ActivatedRoute);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
