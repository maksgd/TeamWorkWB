import { TableBooksComponent } from './table-books.component';
import { TableBooksService } from './table-books.service';

import { HttpClient } from '@angular/common/http';

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('Сервис table-books', () => {
  let httpClient: HttpClient;
  let service: TableBooksService;
  let httpFake: HttpTestingController;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TableBooksComponent],
      providers: [TableBooksComponent, HttpClient],
    })
    .compileComponents();

    httpClient = TestBed.inject(HttpClient);
    httpFake = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TableBooksService);
    
  });

  it('компонент должен быть создан',() => {
    expect(service).toBeTruthy();
  });

  it('запрос должен что либо вернуть', () => {
    service.getHttpCarts().subscribe((data) => {
      expect(data).toBeTruthy();
    });

    const req = httpFake.expectOne(service.urlBook + '/books.json');
    expect(req.request.method).toBe('GET');

    req.flush(req.request.body);
  });

  it('должен дать данные книг', () => {
    const mockBooksDate = {
      releaseDate0: '2011-01-02',
      releaseDate1: '2011-01-03',
      releaseDate2: '2011-06-03',
      releaseDate3: '2011-07-22',
    };

    service.getHttpDataBook().subscribe((data) => {
      expect(data[0].releaseDate).toBe(mockBooksDate.releaseDate0);
      expect(data[1].releaseDate).toBe(mockBooksDate.releaseDate1);
      expect(data[2].releaseDate).toBe(mockBooksDate.releaseDate2);
      expect(data[3].releaseDate).toBe(mockBooksDate.releaseDate3);
    });

    const req = httpFake.expectOne(service.urlBook + '/books.json');
    expect(req.request.method).toBe('GET');

    req.flush(mockBooksDate); // Данные результата запроса
  });

  it('длинна массива данных из запроса должна равняться 6', () => {
    console.log('1111111111');
    const lengthData = 6

    service.getHttpDataBook().subscribe((data) => {
      expect(data.length).toBe(lengthData);

    });

    const req = httpFake.expectOne(service.urlBook + '/books.json');
    expect(req.request.method).toBe('GET');
    console.log(req);

    req.flush(req.request.body); // Данные результата запроса jit aot
    console.log('4444444444444');

  });

  afterEach(() => {
    httpFake.verify()
  }); // Подтверждение выполненного запроса
});
