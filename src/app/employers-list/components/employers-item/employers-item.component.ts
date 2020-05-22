import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IEmployer } from '../../../backend/services/employers.service';

@Component({
  selector: 'app-employers-item',
  templateUrl: './employers-item.component.html',
  styleUrls: ['./employers-item.component.scss']
})
export class EmployersItemComponent implements OnInit {
  @Input() employer: IEmployer;
  @Output() removeClicked = new EventEmitter();

  constructor() { }

  binClicked(event) {
    this.removeClicked.emit(event);
  }

  ngOnInit(): void {
  }

}
