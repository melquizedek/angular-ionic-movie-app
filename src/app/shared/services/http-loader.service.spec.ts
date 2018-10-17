import { TestBed, inject } from '@angular/core/testing';

import { HttpLoaderService } from './http-loader.service';

describe('HttpLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpLoaderService]
    });
  });

  it('should be created', inject([HttpLoaderService], (service: HttpLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
