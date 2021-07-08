import { TestBed } from '@angular/core/testing';

import { ShopsService } from './shops.service';

describe('ShopsService', () => {
  let service: ShopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ShopsService]});
    service = TestBed.inject(ShopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return shops', (done) => {
    service.getShops().subscribe((shops) => {
      expect(shops.length).toBe(10);
      done();
    });
  });
});
