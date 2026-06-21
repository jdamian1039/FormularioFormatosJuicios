import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradorColindancias } from './administrador-colindancias';

describe('AdministradorColindancias', () => {
  let component: AdministradorColindancias;
  let fixture: ComponentFixture<AdministradorColindancias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministradorColindancias],
    }).compileComponents();

    fixture = TestBed.createComponent(AdministradorColindancias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
