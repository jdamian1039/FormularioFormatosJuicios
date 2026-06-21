import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesPersonas } from './controles-personas';

describe('ControlesPersonas', () => {
  let component: ControlesPersonas;
  let fixture: ComponentFixture<ControlesPersonas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlesPersonas],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlesPersonas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
