import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
  <div class="container">
    <form class="form" action="">
      <div class="form__body">

      <div class="form__header">
        <h2 class="header__title">Create Account</h2>

        <span class="header__text">Create a free salmanwap account to access
all articles and videos.</span>
      </div>

      <div class="form__inputs">

        <div class="input__user">
          <label class="label__user" for="user">Username</label>
          <input class="form__input" type="text" id="user">
          <span class="input__user__text">Must not contain any special character</span>
        </div>

        <div class="input__pass">
        <label class="label__pass" for="pass">Password</label>
          <input class="form__input" type="text" id="pass">
          <span class="input__pass__text">Must have atleast 8+ characters</span>
        </div>

      </div>

      <div class="form__btn">
        <button class="btn">Create a free account</button>
      </div>

      </div>
    </form>
  </div>
`,
styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

constructor() { }

ngOnInit(): void {
}

}
