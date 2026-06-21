import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaDocumentosGenerados } from './respuesta-documentos-generados';

describe('RespuestaDocumentosGenerados', () => {
  let component: RespuestaDocumentosGenerados;
  let fixture: ComponentFixture<RespuestaDocumentosGenerados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RespuestaDocumentosGenerados],
    }).compileComponents();

    fixture = TestBed.createComponent(RespuestaDocumentosGenerados);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
