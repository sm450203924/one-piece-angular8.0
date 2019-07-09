import { TestBed } from '@angular/core/testing';

import { WikiSearchListService } from './wiki-search-list.service';

describe('WikiSearchListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WikiSearchListService = TestBed.get(WikiSearchListService);
    expect(service).toBeTruthy();
  });
});
