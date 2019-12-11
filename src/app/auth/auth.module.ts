import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import {Routes} from "@angular/router";
import {AuthRoutingModule} from "./auth-routing.module";
import { AuthComponent } from './auth.component';



@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
