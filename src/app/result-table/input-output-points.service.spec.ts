import { TestBed } from '@angular/core/testing';

import { InputOutputPointsService } from './input-output-points.service';

describe('InputOutputPointsService', () => {
  let service: InputOutputPointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputOutputPointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
