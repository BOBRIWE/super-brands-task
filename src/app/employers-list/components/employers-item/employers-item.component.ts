import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { IEmployer } from '../../../backend/services/employers.service';
import { IShop, ShopsService } from '../../../backend/services/shops.service';
import { IManyToManyItem } from '../../../backend/services/create-worker-shop-request.service';
import { EmployersListService } from '../../services/employers-list.service';

@Component({
  selector: 'app-employers-item',
  templateUrl: './employers-item.component.html',
  styleUrls: ['./employers-item.component.scss']
})
export class EmployersItemComponent implements OnInit, OnChanges {
  @Input() employer: IEmployer;
  @Input() localManyToMany: IManyToManyItem[];
  @Output() removeClicked = new EventEmitter();

  constructor(private shopsService: ShopsService, private employersListService: EmployersListService) { }

  employerShops: IShop[] = [];

  binClicked(event) {
    this.removeClicked.emit(event);
  }

  minusClicked(shop: IShop) {
    this.employersListService.removeShopClick.next(shop);
  }

  async updateEmployerShops() {
    const shops = await this.shopsService.getShops();
    const employerShops = [];

    for (const item of this.localManyToMany) {
      if (item.employerId === this.employer.id) {
        employerShops.push(shops.find((shop) => shop.id === item.shopId));
      }
    }

    this.employerShops = employerShops;
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (JSON.stringify(changes.localManyToMany.previousValue) !== JSON.stringify(changes.localManyToMany.currentValue)) {
      this.updateEmployerShops();
    }

    if (changes.employer && (JSON.stringify(changes.employer.previousValue) !== JSON.stringify(changes.employer.currentValue))) {
      this.updateEmployerShops();
    }
  }

}
