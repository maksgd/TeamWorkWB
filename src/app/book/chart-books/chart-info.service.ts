import { Injectable } from '@angular/core';
import { IDataBook } from '../table-books/book';

@Injectable({
  providedIn: 'root'
})
export class ChartInfoService {

  constructor() { }

  chartInfo!: IDataBook[]

  saveData(data: IDataBook[]) {
    this.chartInfo = data
  }

  getData() {
    return this.chartInfo
  }
}
