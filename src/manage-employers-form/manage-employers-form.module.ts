import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './components/form-container/form-container.component';



@NgModule({
  declarations: [FormContainerComponent],
  exports: [
    FormContainerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManageEmployersFormModule { }
