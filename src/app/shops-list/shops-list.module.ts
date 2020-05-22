import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { ShopsListComponent } from './components/shops-list/shops-list.component';



@NgModule({
  declarations: [ShopItemComponent, ShopsListComponent],
  exports: [
    ShopItemComponent,
    ShopsListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ShopsListModule { }
