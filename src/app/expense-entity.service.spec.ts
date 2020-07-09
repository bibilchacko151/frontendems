import { TestBed } from '@angular/core/testing';

import { ExpenseEntityService } from './expense-entity.service';

describe('ExpenseEntityService', () => {
  let service: ExpenseEntityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseEntityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
