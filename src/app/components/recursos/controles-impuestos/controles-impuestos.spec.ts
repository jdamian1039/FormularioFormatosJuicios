import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesImpuestos } from './controles-impuestos';

describe('ControlesImpuestos', () => {
  let component: ControlesImpuestos;
  let fixture: ComponentFixture<ControlesImpuestos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlesImpuestos],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlesImpuestos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
