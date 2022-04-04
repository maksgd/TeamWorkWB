import {TableBooksComponent} from "./table-books.component";
import {TableBooksService} from "./table-books.service";

import {HttpClient} from "@angular/common/http";

import {inject, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";

describe('Сервис table-books', () => {

    let httpClient: HttpClient;
    let service: TableBooksService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule, RouterTestingModule],
        declarations: [TableBooksComponent],
        providers: [TableBooksComponent, HttpClient]
      })
  
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
      service = TestBed.inject(TableBooksService);
    });
  
    it('создание компонента', inject([TableBooksService], (service: TableBooksService) => {
      expect(service).toBeTruthy();
    }))
  
    it('должен дать данные книг',inject(
        [HttpTestingController, TableBooksService],
        (httpFake: HttpTestingController, service: TableBooksService) => {
          const mockBooksDate = {
            "releaseDate1": "2011-01-02",
            "releaseDate2": "2011-01-03",
            "releaseDate3": "2011-06-03",
            "releaseDate4": "2011-07-22"
          }
  
          service.getFullSet().subscribe(data => {
            expect(data.set2.data[0].releaseDate).toBe(mockBooksDate.releaseDate1);
            expect(data.set2.data[1].releaseDate).toBe(mockBooksDate.releaseDate2);
            expect(data.set2.data[2].releaseDate).toBe(mockBooksDate.releaseDate3);
            expect(data.set2.data[3].releaseDate).toBe(mockBooksDate.releaseDate4);
          });
  
          const req = httpFake.expectOne(service.urlBook + '/books.json');
          expect(req.request.method).toBe('GET');

          req.flush(mockBooksDate); // Данные результата запроса

        }
      )
    );

    afterEach(() => httpTestingController.verify()) // Подтверждение выполненного запроса 
  })
    