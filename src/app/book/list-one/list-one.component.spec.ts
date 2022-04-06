import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListOneComponent } from './list-one.component';

describe('Компонент ListOne', () => {
  let component: ListOneComponent;
  let fixture: ComponentFixture<ListOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOneComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('компонент должен быть создан', () => {
    expect(component).toBeTruthy();
  });

  xit('заголовок сраницы должен быть "Main heading"',
    () => {
      const title = fixture.debugElement.query(By.css('#header'));
      expect(title.nativeElement).toBe("Main heading")
    });
});
