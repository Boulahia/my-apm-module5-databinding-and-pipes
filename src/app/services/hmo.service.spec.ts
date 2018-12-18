import { TestBed } from '@angular/core/testing';

import { HmoService } from './hmo.service';

describe('HmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HmoService = TestBed.get(HmoService);
    expect(service).toBeTruthy();
  });
});
