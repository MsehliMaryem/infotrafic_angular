import { TestBed } from '@angular/core/testing';

import { AbonneService } from './abonne.service';

describe('AbonneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AbonneService = TestBed.get(AbonneService);
    expect(service).toBeTruthy();
  });
});
