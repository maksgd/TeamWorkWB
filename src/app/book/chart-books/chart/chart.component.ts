import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { bookRoutes } from '../../book-routing.module';
import { IDataBook } from '../../table-books/book';
import { TableBooksService } from '../../table-books/table-books.service';

Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  template: `
    <div class="chart">
      <h1 mat-dialog-title>График продаж</h1>

      <div mat-dialog-content>
        <div id="divChart">
          <canvas id="chartBooks"></canvas>
        </div>
      </div>

      <mat-dialog-actions>
        <button mat-button [mat-dialog-close]="true">Close</button>
      </mat-dialog-actions>
    </div>
  `,
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {
  constructor(private tableBooksService: TableBooksService) {}

  set2$ = this.tableBooksService.getDataBook();

  date: string[] = [];
  qtyRelease: number[] = [];

  ngOnInit(): void {
    this.set2$.subscribe((books: IDataBook[]) => {
      books.forEach((item) => {
        this.date.push(item.releaseDate);
        this.qtyRelease.push(item.qtyRelease);
      });
    });
  }

  ngAfterViewInit(): void {
    new Chart('chartBooks', {
      type: 'bar',
      data: {
        labels: this.date,
        datasets: [
          {
            label: 'Продано книг',
            data: this.qtyRelease,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
