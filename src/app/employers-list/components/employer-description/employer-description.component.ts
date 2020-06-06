import { Component, Input, OnInit } from '@angular/core';
import { IEmployer } from '../../../backend/services/employers.service';
import { EmployersListService } from '../../services/employers-list.service';

@Component({
  selector: 'app-employer-description',
  templateUrl: './employer-description.component.html',
  styleUrls: ['./employer-description.component.scss']
})
export class EmployerDescriptionComponent implements OnInit {
  @Input() employer: IEmployer;
  @Input() shopsCount: number;
  constructor(private employersListService: EmployersListService) { }

  binClicked() {
    this.employersListService.removeEmployerClick.next(this.employer);
  }

  ngOnInit(): void {
  }

}
