import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionInmueble } from './direccion-inmueble';

describe('DireccionInmueble', () => {
  let component: DireccionInmueble;
  let fixture: ComponentFixture<DireccionInmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionInmueble],
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionInmueble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
