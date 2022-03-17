import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-one',
  template: `
  <div class="list">
    <div class="container">

      <div class="first__block">

        <div class="fb__img">
          <img class="img" src="./noimg.png" alt="">
        </div>
        <div class="fb__text">

          <div class="text__header">Main heading</div>

          <div class="text__inner__first">Идейные соображения высшего порядка, а также сложившаяся структура организации позволяет оценить значение новых предложений. Равным образом рамки и место обучения кадров представляет собой интересный эксперимент проверки существенных финансовых и административных условий. </div>

          <div class="text__inner__second">Таким образом укрепление и развитие структуры способствует подготовки и реализации направлений прогрессивного развития.</div>

        </div>
      </div>

      <div class="more__info">

        <div class="mi__title">Secondary heading</div>
        <div class="mi__text__first">Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей деятельности влечет за собой процесс внедрения и модернизации систем массового участия. С другой стороны рамки и место обучения кадров представляет собой интересный эксперимент проверки соответствующий условий активизации.</div>

        <div class="mi__text__second">Задача организации, в особенности же укрепление и развитие структуры играет важную роль в формировании модели развития. Таким образом реализация намеченных плановых заданий способствует подготовки и реализации системы обучения кадров, соответствует насущным потребностям. </div>
      </div>

    </div>
  </div>
  `,
  styleUrls: ['./list-one.component.scss']
})
export class ListOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
