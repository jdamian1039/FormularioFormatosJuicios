import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionInmueble } from './inscripcion-inmueble';

describe('InscripcionInmueble', () => {
  let component: InscripcionInmueble;
  let fixture: ComponentFixture<InscripcionInmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InscripcionInmueble],
    }).compileComponents();

    fixture = TestBed.createComponent(InscripcionInmueble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
