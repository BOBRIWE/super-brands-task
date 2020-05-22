import { TestBed } from '@angular/core/testing';

import { CreateWorkerShopRequestService } from './create-worker-shop-request.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CreateWorkerShopRequestService', () => {
  let service: CreateWorkerShopRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CreateWorkerShopRequestService]
    });
    service = TestBed.inject(CreateWorkerShopRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add shops to employer', () => {
    service.addShopsToEmployer(1, [1, 2, 3]);
    service.addShopsToEmployer(1, [3]);

    expect(service.localManyToMany.length).toBe(3);
  });
});
