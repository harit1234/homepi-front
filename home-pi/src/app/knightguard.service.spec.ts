import { TestBed, inject } from '@angular/core/testing';

import { KnightguardService } from './knightguard.service';

describe('KnightguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KnightguardService]
    });
  });

  it('should be created', inject([KnightguardService], (service: KnightguardService) => {
    expect(service).toBeTruthy();
  }));
});
