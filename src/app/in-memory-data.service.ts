import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BookElement, CartElement } from './book/table-books/book';
import dataBook from './input-data.json';
import { IHero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];

    const cartArr: CartElement[] = dataBook.set1.data

    const bookArr: BookElement[] = dataBook.set2.data.map((book: { id: any; }) => Object.assign(book, dataBook.set1.data.find((cart: { id: any; }) => cart.id == book.id)))



    return {heroes, cartArr, bookArr};
  }

  genId(heroes: IHero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}