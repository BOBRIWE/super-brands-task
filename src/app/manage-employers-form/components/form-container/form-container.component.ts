import { Component, OnInit } from '@angular/core';
import { IShop, ShopsService } from '../../../backend/services/shops.service';
import { CreateWorkerShopRequestService } from '../../../backend/services/create-worker-shop-request.service';
import { IEmployer } from '../../../backend/services/employers.service';
import { EmployersListService } from '../../../employers-list/services/employers-list.service';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
})
export class FormContainerComponent implements OnInit {
  currentEmployer: IEmployer;
  emptyShops: IShop[] = [];

  constructor(
    private createWorkerShopRequestService: CreateWorkerShopRequestService,
    private shopsService: ShopsService,
    private employersListService: EmployersListService
  ) { }

  shopClicked(shop: IShop) {
    if (this.currentEmployer !== undefined) {
      this.createWorkerShopRequestService.addShopsToEmployer(this.currentEmployer.id, [shop.id]);
      this.updateShops();
    }
  }

  updateShops() {
    this.shopsService.getShops().subscribe((shops) => {
      const newShops = [];
      for (const shop of shops) {
        const found = this.createWorkerShopRequestService.localManyToMany.find((item) => item.shopId === shop.id);
        if (!found) {
          newShops.push(shop);
        }
      }

      this.emptyShops = newShops;
    });
  }

  removeShopClicked(shop: IShop) {
    this.createWorkerShopRequestService.removeShopFromEmployer(shop.id, this.currentEmployer.id);
    this.updateShops();
  }

  employerChanged(employer: IEmployer) {
    this.currentEmployer = employer;
  }

  removeEmployer(employerId: number) {
    this.createWorkerShopRequestService.removeEmployer(employerId);
    this.updateShops();
  }

  saveManyToMany() {
    this.createWorkerShopRequestService.createWorkerShopRequest(this.createWorkerShopRequestService.localManyToMany);
  }

  async ngOnInit(): Promise<void> {
    this.employersListService.removeShopClick.subscribe((shop) => {
      this.removeShopClicked(shop);
    });

    this.employersListService.removeEmployerClick.subscribe((employer) => {
      this.removeEmployer(employer.id);
    });

    this.employersListService.activeEmployerChange.subscribe((employer) => {
      this.employerChanged(employer);
    });

    await this.updateShops();
  }

}
