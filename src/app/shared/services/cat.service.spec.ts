import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CatService } from './cat.service';

describe('CatService', () => {
  let service: CatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // Besoin du HttpClientModule pour gérer les appels API
      imports:[HttpClientModule]
    });
    // Injection du service
    service = TestBed.inject(CatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
