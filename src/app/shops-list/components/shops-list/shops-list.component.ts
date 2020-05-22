import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IShop, ShopsService } from '../../../backend/services/shops.service';
import { CreateWorkerShopRequestService } from '../../../backend/services/create-worker-shop-request.service';

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
