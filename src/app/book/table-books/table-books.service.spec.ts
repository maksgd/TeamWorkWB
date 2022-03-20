import { TestBed } from '@angular/core/testing';

import { TableBooksService } from './table-books.service';

describe('TableBooksService', () => {
  let service: TableBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
