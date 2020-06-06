import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IShop } from '../../backend/services/shops.service';
import { IEmployer } from '../../backend/services/employers.service';

@Injectable()
export class EmployersListService {

  constructor() { }

  removeShopClick = new Subject<IShop>();

  removeEmployerClick = new Subject<IEmployer>();
}
