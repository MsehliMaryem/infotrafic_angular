import { TestBed } from '@angular/core/testing';

import { ChauffeurTaxiService } from './chauffeur-taxi.service';

describe('ChauffeurTaxiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChauffeurTaxiService = TestBed.get(ChauffeurTaxiService);
    expect(service).toBeTruthy();
  });
});
