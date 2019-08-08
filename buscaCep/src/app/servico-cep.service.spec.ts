import { TestBed } from '@angular/core/testing';

import { ServicoCepService } from './servico-cep.service';

describe('ServicoCepService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicoCepService = TestBed.get(ServicoCepService);
    expect(service).toBeTruthy();
  });
});
