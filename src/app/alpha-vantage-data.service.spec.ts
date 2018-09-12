import { TestBed, inject } from '@angular/core/testing';

import { AlphaVantageDataService } from './alpha-vantage-data.service';

describe('AlphaVantageDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphaVantageDataService]
    });
  });

  it('should be created', inject([AlphaVantageDataService], (service: AlphaVantageDataService) => {
    expect(service).toBeTruthy();
  }));
});
