import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Testigos } from './testigos';

describe('Testigos', () => {
  let component: Testigos;
  let fixture: ComponentFixture<Testigos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testigos],
    }).compileComponents();

    fixture = TestBed.createComponent(Testigos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
