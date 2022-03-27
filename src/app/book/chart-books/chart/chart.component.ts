import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IDataBook } from '../../table-books/book';
import { ChartInfoService } from '../chart-info.service';

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

export class ChartComponent implements OnInit {
  constructor(private chartInfo: ChartInfoService) {}

  dataInfoFromTable = this.chartInfo.getData();

  labelsChart: Array<string> = this.dataInfoFromTable.map((book) => book.releaseDate)
  dataChart: Array<number> = this.dataInfoFromTable.map((book) => book.qtyRelease)

  createChart(): void {
    new Chart('chartBooks', {
      type: 'bar',
      data: {
        labels: this.labelsChart,
        datasets: [
          {
            label: 'Продано книг',
            data: this.dataChart,
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

  ngOnInit(): void {
    this.createChart()
  }

}
