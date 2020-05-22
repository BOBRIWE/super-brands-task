import { Injectable } from '@angular/core';
import { BackendModule } from '../backend.module';

@Injectable({
  providedIn: BackendModule
})
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

  async getEmployersList(): Promise<IEmployer[]> {
    return Promise.resolve(this.fakeEmployers);
  }

  async removeEmployer(employerId: number): Promise<boolean> {
    this.fakeEmployers = this.fakeEmployers.filter((employer) => employer.id !== employerId);
    return Promise.resolve(true);
  }

  async addEmployer(): Promise<boolean> {
    const employer = this.fakeEmployersPool.shift();

    if (employer !== undefined) {
      this.fakeEmployers.push(employer);
      return Promise.resolve(true);
    } else {
      return Promise.resolve(false);
    }
  }
}

export interface IEmployer {
  id: number;
  fullName: string;
  avatarUrl: string;
}
