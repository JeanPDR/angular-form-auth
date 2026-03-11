import { Routes } from "@angular/router";
import { Login } from "./auth/login/login";
import { Register } from "./auth/register/register";
import { CodeVerification } from "./auth/code-verification/code-verification";

export const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register},
      { path: 'verify', component: CodeVerification},
      // { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];