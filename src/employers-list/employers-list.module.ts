import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployersListComponent } from './components/employers-list/employers-list.component';
import { EmployersItemComponent } from './components/employers-item/employers-item.component';
import { EmployerDescriptionComponent } from './components/employer-description/employer-description.component';



@NgModule({
  declarations: [EmployersListComponent, EmployersItemComponent, EmployerDescriptionComponent],
  exports: [
    EmployersListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EmployersListModule { }
