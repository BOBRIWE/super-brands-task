import { Injectable } from '@angular/core';
import { IEmployer } from './employers.service';
import { IShop } from './shops.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateWorkerShopRequestService {
  private fakeManyToMany: IManyToManyItem[] = [];

  constructor(private http: HttpClient) { }

  async createWorkerShopRequest(manyToMany: IManyToManyItem): Promise<boolean> {
    const body = JSON.stringify(manyToMany);
    try {
      this.http.post('', body);
      return Promise.resolve(true);
    } catch (e) {
      return Promise.resolve(false);
    }
  }

  get localManyToMany(): IManyToManyItem[] {
    return [...this.fakeManyToMany];
  }

  addShopsToEmployer(employerId: number, shopIds: number[]) {

    for (const shopId of shopIds) {
      const found = this.fakeManyToMany.find((item) => {
        return item.employerId === employerId && item.shopId === shopId;
      });

      if (found === undefined) {
        this.fakeManyToMany.push({
          shopId,
          employerId
        });
      }
    }

  }

  removeShopFromEmployer(shopId: number, employerId: number) {
    this.fakeManyToMany = this.fakeManyToMany.filter((item) => !(item.shopId === shopId && item.employerId === employerId));
  }

  addEmployersToShop(shopId: number, employerIds: number[]) {

    for (const employerId of employerIds) {
      const found = this.fakeManyToMany.find((item) => {
        return item.employerId === employerId && item.shopId === shopId;
      });

      if (found === undefined) {
        this.fakeManyToMany.push({
          shopId,
          employerId
        });
      }
    }

  }
}

export interface IManyToManyItem {
  employerId: number;
  shopId: number;
}
