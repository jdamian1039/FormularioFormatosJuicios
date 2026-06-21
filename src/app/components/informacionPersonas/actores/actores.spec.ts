import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Actores } from './actores';

describe('Actores', () => {
  let component: Actores;
  let fixture: ComponentFixture<Actores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Actores],
    }).compileComponents();

    fixture = TestBed.createComponent(Actores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
