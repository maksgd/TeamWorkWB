import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registr',
  template: `
    <!-- Form -->

  <form [formGroup]="formAllInfo" class="form" (submit)="onAuth()">
    <div class="container">

      <div class="example-container">

      <h2 class="header">Регистрация</h2>

        <mat-form-field class="mt-30" appearance="fill">
          <mat-label>Login</mat-label>
          <input matInput formControlName="login" >
          <div class="error" *ngIf="isControlInvalid('login')">От трех символов</div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput placeholder="pat@example.com" formControlName="email" #userEmail>
          <div class="error" *ngIf="isControlInvalid('email')">Не валидный email</div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput placeholder="pat@example.com" formControlName="password" #userPwd>
          <div class="error" *ngIf="isControlInvalid('password')">От пяти символов</div>
        </mat-form-field>


        <div class="container-btn">

        <button class="btn mr-30" mat-raised-button color="primary" (click)="authService.SignUp(userEmail.value, userPwd.value)" [disabled]="!formAllInfo.valid" >Зарегистрироваться</button>

        <button class="btn__hasAcc" mat-raised-button color="primary" routerLink="/book">У меня есть аккаунт</button>

        </div>

      </div>

    </div>
  </form>
  <!-- /Form -->
  `,
  styleUrls: ['./registr.component.scss'],
})
export class RegistrComponent implements OnInit {

  formAllInfo: FormGroup

  constructor(private router: Router, private fb: FormBuilder, public authService: AuthService) {
    this.formAllInfo = this.fb.group({
      login: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }


  onAuth() {

  }

  ngOnInit() {}

  isControlInvalid(controlName: string): boolean {
    const control = this.formAllInfo.controls[controlName];
    const result = control.invalid && control.touched;

    return result;
  }

}
