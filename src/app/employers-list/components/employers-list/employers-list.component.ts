import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployersService, IEmployer } from '../../../backend/services/employers.service';
import { CreateWorkerShopRequestService } from '../../../backend/services/create-worker-shop-request.service';

@Component({
  selector: 'app-employers-list',
  templateUrl: './employers-list.component.html',
  styleUrls: ['./employers-list.component.scss']
})
export class EmployersListComponent implements OnInit {
  get currentEmployer(): IEmployer {
    return this._currentEmployer;
  }

  set currentEmployer(value: IEmployer) {
    this.employerChanged.emit(value);
    this._currentEmployer = value;
  }
  @Output() employerChanged = new EventEmitter();

  constructor(private employersService: EmployersService, createWorkerShopRequestService: CreateWorkerShopRequestService) {
    this.createWorkerShopRequestService = createWorkerShopRequestService;
  }

  // tslint:disable-next-line:variable-name
  private _currentEmployer: IEmployer;
  localEmployers: IEmployer[];
  createWorkerShopRequestService: CreateWorkerShopRequestService;

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
