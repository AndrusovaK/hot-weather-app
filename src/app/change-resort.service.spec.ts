import { TestBed, inject } from '@angular/core/testing';

import { ChangeResortService } from './change-resort.service';

describe('ChangeResortService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChangeResortService]
    });
  });

  it('should be created', inject([ChangeResortService], (service: ChangeResortService) => {
    expect(service).toBeTruthy();
  }));
});
