import { TestBed } from '@angular/core/testing';

import { QuotesRepoService } from './quotes-repo.service';

describe('QuotesRepoService', () => {
  let service: QuotesRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
