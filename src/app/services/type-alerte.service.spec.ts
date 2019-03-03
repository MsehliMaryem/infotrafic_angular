import { TestBed } from '@angular/core/testing';

import { TypeAlerteService } from './type-alerte.service';

describe('TypeAlerteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeAlerteService = TestBed.get(TypeAlerteService);
    expect(service).toBeTruthy();
  });
});
