import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `
    <!-- Form -->

  <form [formGroup]="formAllInfo" class="form" (submit)="onAuth()">
    <div class="container">

      <div class="example-container">

        <h2 class="header">Авторизация</h2>

        <mat-form-field class="mt-30" appearance="fill">
          <mat-label>Email</mat-label>
          <input matInput placeholder="pat@example.com" formControlName="email" #userName>
          <div class="error" *ngIf="isControlInvalid('email')">Не валидный email</div>
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Password</mat-label>
          <input matInput placeholder="pat@example.com" formControlName="password" #userPassword>
          <div class="error" *ngIf="isControlInvalid('password')">Какие то правила не соблюдаешь </div>
        </mat-form-field>


        <div class="container-btn">

        <button class="btn mr-30" routerLink="/book" mat-raised-button color="primary" (click)="authService.SignIn(userName.value, userPassword.value)" [disabled]="!formAllInfo.valid">Войти</button>

        <button class="btn" mat-raised-button color="primary" routerLink="/registr">Регистрация</button>

        <button class="btn" mat-raised-button color="primary" (click)="authService.GoogleAuth()">G</button>
        </div>

      </div>

    </div>
  </form>
  <!-- /Form -->
  `,
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  formAllInfo: FormGroup

  constructor(private router: Router, private fb: FormBuilder, public authService: AuthService) {
    this.formAllInfo = this.fb.group({
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
