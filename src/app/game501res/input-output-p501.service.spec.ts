import { TestBed } from '@angular/core/testing';

import { InputOutputP501Service } from './input-output-p501.service';

describe('InputOutputP501Service', () => {
  let service: InputOutputP501Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputOutputP501Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
