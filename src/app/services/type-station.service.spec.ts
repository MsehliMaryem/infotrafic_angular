import { TestBed } from '@angular/core/testing';

import { TypeStationService } from './type-station.service';

describe('TypeStationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeStationService = TestBed.get(TypeStationService);
    expect(service).toBeTruthy();
  });
});
