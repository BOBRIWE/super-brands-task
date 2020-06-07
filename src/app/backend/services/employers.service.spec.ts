import { TestBed } from '@angular/core/testing';

import { EmployersService } from './employers.service';
import { switchMap } from 'rxjs/operators';
import { forkJoin } from 'rxjs';

describe('EmployersService', () => {
  let service: EmployersService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [EmployersService]});
    service = TestBed.inject(EmployersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add employer', (done) => {
    service.getEmployersList()
      .pipe(switchMap((employers) => {
        expect(employers.length).toBe(0);
        return service.addEmployer();
      }))
      .pipe(switchMap(() => {
        return service.getEmployersList();
      }))
      .subscribe((newEmployers) => {
        expect(newEmployers.length).toBe(1);
        done();
      });
  });

  it('should remove employer by id', (done) => {
    let employersCount: number;

    forkJoin([
      service.addEmployer(),
      service.addEmployer(),
      service.addEmployer()
    ])
      .pipe(switchMap(() => {
        return service.getEmployersList();
      }))
      .pipe(switchMap((employers) => {
        employersCount = employers.length;
        return service.removeEmployer(3);
      }))
      .pipe(switchMap(() => {
        return service.getEmployersList();
      }))
      .subscribe((newEmployers) => {
        const newEmployersCount = newEmployers.length;

        expect(newEmployersCount).toBe(employersCount - 1);
        expect(newEmployers.find((employer) => employer.id === 3)).toBe(undefined);
        done();
      });
  });
});
