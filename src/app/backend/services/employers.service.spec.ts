import { TestBed } from '@angular/core/testing';

import { EmployersService } from './employers.service';

describe('EmployersService', () => {
  let service: EmployersService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [EmployersService]});
    service = TestBed.inject(EmployersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add employer', async () => {
    const employers = await service.getEmployersList();
    expect(employers.length).toBe(0);

    await service.addEmployer();
    const newEmployers = await service.getEmployersList();
    expect(newEmployers.length).toBe(1);
  });

  it('should remove employer by id', async () => {
    await service.addEmployer();
    await service.addEmployer();
    await service.addEmployer();

    const employers = await service.getEmployersList();
    const employersCount = employers.length;

    await service.removeEmployer(3);

    const newEmployers = await service.getEmployersList();
    const newEmployersCount = newEmployers.length;

    expect(newEmployersCount).toBe(employersCount - 1);
    expect(newEmployers.find((employer) => employer.id === 3)).toBe(undefined);
  });
});
