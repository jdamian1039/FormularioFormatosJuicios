import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCompraventaInmueble } from './informacion-compraventa-inmueble';

describe('InformacionCompraventaInmueble', () => {
  let component: InformacionCompraventaInmueble;
  let fixture: ComponentFixture<InformacionCompraventaInmueble>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionCompraventaInmueble],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionCompraventaInmueble);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
