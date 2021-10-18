import { TestBed } from '@angular/core/testing';

import { MelissaAddressSearchService } from './melissa-address-search.service';

describe('MelissaAddressSearchService', () => {
  let service: MelissaAddressSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MelissaAddressSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
