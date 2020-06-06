import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IShop } from '../../../backend/services/shops.service';

@Component({
  selector: 'app-shops-list',
  templateUrl: './shops-list.component.html',
  styleUrls: ['./shops-list.component.scss'],
})
export class ShopsListComponent implements OnInit {
  @Output() shopClicked = new EventEmitter();
  @Input() shops: IShop[];

  constructor() { }

  async ngOnInit(): Promise<void> {
  }

  articleClicked(shop: IShop) {
    this.shopClicked.emit(shop);
  }
}
