import { TestBed } from '@angular/core/testing';

import { ApiConexion } from './api-conexion';

describe('ApiConexion', () => {
  let service: ApiConexion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiConexion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
