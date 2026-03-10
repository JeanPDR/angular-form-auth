import { Routes } from "@angular/router";
import { Login } from "./auth/login/login";
import { Register } from "./auth/register/register";

export const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'login', component: Login, title: "Login Page" },
      { path: 'register', component: Register, title: "Login Page" },
      // { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];