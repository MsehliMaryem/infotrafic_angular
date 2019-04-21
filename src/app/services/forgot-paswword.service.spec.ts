import { TestBed } from '@angular/core/testing';

import { ForgotPaswwordService } from './forgot-paswword.service';

describe('ForgotPaswwordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgotPaswwordService = TestBed.get(ForgotPaswwordService);
    expect(service).toBeTruthy();
  });
});
