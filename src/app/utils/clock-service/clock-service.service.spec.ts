import { TestBed } from '@angular/core/testing';

import { ClockServiceService } from './clock-service.service';

describe('ClockServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClockServiceService = TestBed.get(ClockServiceService);
    expect(service).toBeTruthy();
  });
});
