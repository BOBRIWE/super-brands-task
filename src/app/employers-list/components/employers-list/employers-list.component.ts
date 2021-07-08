import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EmployersService, IEmployer } from '../../../backend/services/employers.service';
import { CreateWorkerShopRequestService } from '../../../backend/services/create-worker-shop-request.service';
import { EmployersListService } from '../../services/employers-list.service';
import { switchMap } from 'rxjs/operators';

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
    this.employersListService.activeEmployerChange.next(value);
    this._currentEmployer = value;
  }

  constructor(
    private employersService: EmployersService,
    public createWorkerShopRequestService: CreateWorkerShopRequestService,
    private employersListService: EmployersListService
  ) {
    this.createWorkerShopRequestService = createWorkerShopRequestService;
  }

  // tslint:disable-next-line:variable-name
  private _currentEmployer: IEmployer;
  localEmployers: IEmployer[];

  addEmployer() {
    this.employersService.addEmployer()
      .pipe(switchMap(() => {
        return this.employersService.getEmployersList();
      }))
      .subscribe((employers) => {
        this.localEmployers = employers;
        this.currentEmployer = this.localEmployers[this.localEmployers.length - 1];
      });
  }

  removeEmployer(employerId: number) {
    this.employersService.removeEmployer(employerId)
      .pipe(switchMap(() => {
        return this.employersService.getEmployersList();
      }))
      .subscribe((employers) => {
        this.localEmployers = employers;
        this.currentEmployer = this.localEmployers[this.localEmployers.length - 1];
      });
  }

  async selectEmployer(employer: IEmployer) {
    this.currentEmployer = employer;
  }

  ngOnInit(): void {
    this.employersListService.removeEmployerClick.subscribe((employer) => {
      this.removeEmployer(employer.id);
    });
  }

}
