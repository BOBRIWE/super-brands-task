import { Component, Input, OnInit } from '@angular/core';
import { IShop } from '../../../backend/services/shops.service';

@Component({
  selector: 'app-shop-item',
  templateUrl: './shop-item.component.html',
  styleUrls: ['./shop-item.component.scss']
})
export class ShopItemComponent implements OnInit {
  @Input() shop: IShop;

  constructor() { }

  ngOnInit(): void {
  }

}
