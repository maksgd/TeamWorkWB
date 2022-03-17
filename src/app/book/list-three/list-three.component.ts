import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-three',
  template: `
    <div class="list">
      <div class="container">

        <div class="first__block">

          <div class="fb__img">
            <div class="img__block">
              <img class="img" src="./noimg.png" alt="">
            </div>
          </div>
          <div class="fb__text">

            <div class="text__header">Main heading</div>

            <div class="text__inner__first">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</div>

            <div class="text__inner__second">Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </div>

          </div>

        </div>

      </div>
    </div>
  `,
  styleUrls: ['./list-three.component.scss']
})
export class ListThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
