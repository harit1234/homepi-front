import { TestBed, inject } from '@angular/core/testing';

import { KnightpermitService } from './knightpermit.service';

describe('KnightpermitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnightpermitService]
    });
  });

  it('should be created', inject([KnightpermitService], (service: KnightpermitService) => {
    expect(service).toBeTruthy();
  }));
});
