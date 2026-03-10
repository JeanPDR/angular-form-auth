import { Routes } from "@angular/router";
import { Login } from "./auth/login/login";

export const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'login', component: Login, title: "Login Page" },
      { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];