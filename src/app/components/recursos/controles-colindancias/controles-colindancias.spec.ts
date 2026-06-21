import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlesColindancias } from './controles-colindancias';

describe('ControlesColindancias', () => {
  let component: ControlesColindancias;
  let fixture: ComponentFixture<ControlesColindancias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlesColindancias],
    }).compileComponents();

    fixture = TestBed.createComponent(ControlesColindancias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
