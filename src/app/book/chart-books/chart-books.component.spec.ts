import { MatDialog } from "@angular/material/dialog";
import { ChartBooksComponent } from "./chart-books.component";

describe('Тест Чарт компонента', () => {
    let classChart: ChartBooksComponent;
    const fakeMatDialog = {}

    beforeEach(() => {
        classChart = new ChartBooksComponent(fakeMatDialog as MatDialog);
    })

    it('создание экземпляра класса Чарта', () => {
        expect(classChart).toBeTruthy();
    })
    
})
