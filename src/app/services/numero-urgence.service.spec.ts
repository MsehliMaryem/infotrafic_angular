import { TestBed } from '@angular/core/testing';

import { NumeroUrgenceService } from './numero-urgence.service';

describe('NumeroUrgenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumeroUrgenceService = TestBed.get(NumeroUrgenceService);
    expect(service).toBeTruthy();
  });
});
