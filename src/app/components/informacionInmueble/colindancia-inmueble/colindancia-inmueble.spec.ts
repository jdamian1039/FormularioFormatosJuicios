import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColindanciaInmueble } from './colindancia-inmueble';

describe('ColindanciaInmueble', () => {
  let component: ColindanciaInmueble;
  let fixture: ComponentFixture<ColindanciaInmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColindanciaInmueble],
    }).compileComponents();

    fixture = TestBed.createComponent(ColindanciaInmueble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
