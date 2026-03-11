import { Routes } from "@angular/router";
import { Login } from "./auth/login/login";
import { Register } from "./auth/register/register";
import { CodeVerification } from "./auth/code-verification/code-verification";
import { SetPassword } from "./auth/set-password/set-password";
import { ResetPassword } from "./auth/reset-password/reset-password";

export const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register},
      { path: 'verify', component: CodeVerification},
      { path: 'set-password', component: SetPassword},
      { path: 'reset-password', component: ResetPassword},
      // { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];