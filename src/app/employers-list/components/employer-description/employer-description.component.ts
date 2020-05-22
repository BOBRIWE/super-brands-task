import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployer } from '../../../backend/services/employers.service';

@Component({
  selector: 'app-employer-description',
  templateUrl: './employer-description.component.html',
  styleUrls: ['./employer-description.component.scss']
})
export class EmployerDescriptionComponent implements OnInit {
  @Input() employer: IEmployer;
  @Input() shopsCount: number;
  @Output() removeClicked = new EventEmitter();
  constructor() { }

  binClicked() {
    this.removeClicked.emit(this.employer.id);
  }

  ngOnInit(): void {
  }

}
