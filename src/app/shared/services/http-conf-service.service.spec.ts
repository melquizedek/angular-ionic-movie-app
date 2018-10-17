import { TestBed, inject } from '@angular/core/testing';

import { HttpConfServiceService } from './http-conf-service.service';

describe('HttpConfServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpConfServiceService]
    });
  });

  it('should be created', inject([HttpConfServiceService], (service: HttpConfServiceService) => {
    expect(service).toBeTruthy();
  }));
});
