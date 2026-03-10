import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-route-module';
import { Login } from './login/login';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: Login, title: 'Developer Login | Go Auth Platform' },
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
