import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ShopsService {
  private fakeShops: IShop[] = [
    {id: 1, address: 'Магазин SBS Москва', name: 'Россия, г. Москва, Бутырская 77' },
    {id: 2, address: 'Магазин SBS Санкт-Петербург', name: 'Россия, г. Санкт-Петербург, Бутырская 77' },
    {id: 3, address: 'Магазин SBS Томск', name: 'Россия, г. Томск, Бутырская 77' },
    {id: 4, address: 'Магазин SBS Коломна', name: 'Россия, г. Коломна, Бутырская 77' },
    {id: 5, address: 'Магазин SBS Тверь', name: 'Россия, г. Тверь, Бутырская 77' },
    {id: 6, address: 'Магазин SBS Калуга', name: 'Россия, г. Калуга, Бутырская 77' },
    {id: 7, address: 'Магазин SBS Сыктывкар', name: 'Россия, г. Сыктывкар, Бутырская 77' },
    {id: 8, address: 'Магазин SBS Сочи', name: 'Россия, г. Сочи, Бутырская 77' },
    {id: 9, address: 'Магазин SBS Астана', name: 'Казахстан, г. Астана, Бутырская 77' },
    {id: 10, address: 'Магазин SBS Минск', name: 'Беларусь, г. Минск, Бутырская 77' },
  ];

  constructor() { }

  getShops(): Observable<IShop[]> {
    return of(this.fakeShops);
  }
}

export interface IShop {
  id: number;
  name: string;
  address: string;
}
