import { TestBed } from '@angular/core/testing';

import { GuitarrasService } from './guitarras.service';

describe('GuitarrasService', () => {
  let service: GuitarrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuitarrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
