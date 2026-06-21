import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Demandados } from './demandados';

describe('Demandados', () => {
  let component: Demandados;
  let fixture: ComponentFixture<Demandados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Demandados],
    }).compileComponents();

    fixture = TestBed.createComponent(Demandados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
