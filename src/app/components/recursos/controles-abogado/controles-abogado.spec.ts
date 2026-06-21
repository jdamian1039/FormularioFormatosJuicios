import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesAbogado } from './controles-abogado';

describe('ControlesAbogado', () => {
  let component: ControlesAbogado;
  let fixture: ComponentFixture<ControlesAbogado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlesAbogado],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlesAbogado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
