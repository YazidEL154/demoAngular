import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarComponent } from './status-bar.component';

describe('StatusBarComponent', () => {
  let component: StatusBarComponent;
  let fixture: ComponentFixture<StatusBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarComponent);
    component = fixture.componentInstance;
    component.hero = {name: "Michel", hp: 400, hpMax: 7000};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shouldn\'t not fall hp below 0', ()=>{
    component.perdreHp(Infinity);
    expect(component.hero.hp).toBe(0);
  })

  it("should reduce hp", ()=>{
    let beforeHp = component.hero.hp;
    component.perdreHp(1);
    expect(component.hero.hp).toBe(beforeHp -1);
  })
});
