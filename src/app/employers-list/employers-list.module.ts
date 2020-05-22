import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployersListComponent } from './components/employers-list/employers-list.component';
import { EmployersItemComponent } from './components/employers-item/employers-item.component';
import { EmployerDescriptionComponent } from './components/employer-description/employer-description.component';
import { EmployersHeaderItemComponent } from './components/employers-header-item/employers-header-item.component';
import { EmployersHeaderEmptyItemComponent } from './components/employers-header-empty-item/employers-header-empty-item.component';
import { ShopsListModule } from '../shops-list/shops-list.module';



@NgModule({
  declarations: [EmployersListComponent, EmployersItemComponent, EmployerDescriptionComponent, EmployersHeaderItemComponent, EmployersHeaderEmptyItemComponent],
  exports: [
    EmployersListComponent
  ],
  imports: [
    CommonModule,
    ShopsListModule
  ]
})
export class EmployersListModule { }
