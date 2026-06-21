import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionAbogado } from './informacion-abogado';

describe('InformacionAbogado', () => {
  let component: InformacionAbogado;
  let fixture: ComponentFixture<InformacionAbogado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacionAbogado],
    }).compileComponents();

    fixture = TestBed.createComponent(InformacionAbogado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
