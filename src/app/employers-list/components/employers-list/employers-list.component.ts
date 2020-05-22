import { Component, OnInit } from '@angular/core';
import { EmployersService, IEmployer } from '../../../backend/services/employers.service';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements OnInit {

  constructor(private employersService: EmployersService) { }

  currentEmployer: IEmployer;
  localEmployers: IEmployer[];

  async addEmployer() {
    await this.employersService.addEmployer();
    this.localEmployers = await this.employersService.getEmployersList();
    this.currentEmployer = this.localEmployers[this.localEmployers.length - 1];
  }

  async removeEmployer(event) {
    await this.employersService.removeEmployer(event);
    this.localEmployers = await this.employersService.getEmployersList();
    this.currentEmployer = this.localEmployers[this.localEmployers.length - 1];
  }

  async selectEmployer(employer: IEmployer) {
    this.currentEmployer = employer;
  }

  ngOnInit(): void {
  }

}
