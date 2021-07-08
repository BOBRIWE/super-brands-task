import { TestBed } from '@angular/core/testing';

import { EmployersListService } from './employers-list.service';

describe('EmployersListService', () => {
  let service: EmployersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
