import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class EmployersService {
  private fakeEmployersPool: IEmployer[] = [
    { id: 1, fullName: 'Аношкин Станислав Касьянович', avatarUrl: 'assets/avatar-big.svg' },
    { id: 2, fullName: 'Бажанов Вячеслав Ираклиевич', avatarUrl: 'assets/avatar-big.svg' },
    { id: 3, fullName: 'Игумнов Демьян Эмилевич', avatarUrl: 'assets/avatar-big.svg' },
    { id: 4, fullName: 'Качусов Вячеслав Евстафиевич', avatarUrl: 'assets/avatar-big.svg' },
    { id: 5, fullName: 'Ананьев Дмитрий Евстафиевич', avatarUrl: 'assets/avatar-big.svg' },
    { id: 6, fullName: 'Соколова Полина Ильевна', avatarUrl: 'assets/avatar-big.svg' },
    { id: 7, fullName: 'Малыхин Клавдий Святославович', avatarUrl: 'assets/avatar-big.svg' },
  ];

  private fakeEmployers: IEmployer[] = [];

  constructor() { }

  getEmployersList(): Observable<IEmployer[]> {
    return of(this.fakeEmployers);
  }

  removeEmployer(employerId: number): Observable<boolean> {
    this.fakeEmployers = this.fakeEmployers.filter((employer) => employer.id !== employerId);
    return of(true);
  }

  addEmployer(): Observable<boolean> {
    const employer = this.fakeEmployersPool.shift();

    if (employer !== undefined) {
      this.fakeEmployers.push(employer);
      return of(true);
    } else {
      return of(false);
    }
  }
}

export interface IEmployer {
  id: number;
  fullName: string;
  avatarUrl: string;
}
