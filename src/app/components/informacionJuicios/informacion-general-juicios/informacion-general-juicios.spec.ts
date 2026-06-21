import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionGeneralJuicios } from './informacion-general-juicios';

describe('InformacionGeneralJuicios', () => {
  let component: InformacionGeneralJuicios;
  let fixture: ComponentFixture<InformacionGeneralJuicios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionGeneralJuicios],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionGeneralJuicios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
