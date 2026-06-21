import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesDirecciones } from './controles-direcciones';

describe('ControlesDirecciones', () => {
  let component: ControlesDirecciones;
  let fixture: ComponentFixture<ControlesDirecciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlesDirecciones],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlesDirecciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
