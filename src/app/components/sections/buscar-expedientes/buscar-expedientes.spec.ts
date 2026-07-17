import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarExpedientes } from './buscar-expedientes';

describe('BuscarExpedientes', () => {
  let component: BuscarExpedientes;
  let fixture: ComponentFixture<BuscarExpedientes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarExpedientes],
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarExpedientes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
