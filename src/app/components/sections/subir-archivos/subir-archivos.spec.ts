import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirArchivos } from './subir-archivos';

describe('SubirArchivos', () => {
  let component: SubirArchivos;
  let fixture: ComponentFixture<SubirArchivos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubirArchivos],
    }).compileComponents();

    fixture = TestBed.createComponent(SubirArchivos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
