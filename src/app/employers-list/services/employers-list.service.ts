import { Injectable } from '@angular/core';
import { EmployersListModule } from '../employers-list.module';
import { Subject } from 'rxjs';
import { IShop } from '../../backend/services/shops.service';

@Injectable()
export class EmployersListService {

  constructor() { }

  removeShopClick = new Subject<IShop>();

  removeEmployerClick = new Subject();
}
