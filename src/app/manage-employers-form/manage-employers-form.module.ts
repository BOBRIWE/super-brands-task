import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './components/form-container/form-container.component';
import { EmployersListModule } from '../employers-list/employers-list.module';



@NgModule({
  declarations: [FormContainerComponent],
  exports: [
    FormContainerComponent
  ],
  imports: [
    CommonModule,
    EmployersListModule
  ]
})
export class ManageEmployersFormModule { }
