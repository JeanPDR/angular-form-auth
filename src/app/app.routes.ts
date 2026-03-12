import { Routes } from "@angular/router";
import { Login } from "./auth/login/login";
import { Register } from "./auth/register/register";
import { CodeVerification } from "./auth/code-verification/code-verification";
import { SetPassword } from "./auth/set-password/set-password";
import { ResetPassword } from "./auth/reset-password/reset-password";
import { Dashboard } from "./dashboard/dashboard";

import { guestGuard } from "./auth/guards/guest.guard";
import { authGuard } from "./auth/guards/auth.guard";

export const routes: Routes = [
  {
    path: '', 
    children: [
      { path: 'login', component: Login, canActivate: [guestGuard] },
      { path: 'register', component: Register, canActivate: [guestGuard] },
      { path: 'verify', component: CodeVerification, canActivate: [guestGuard] },
      { path: 'set-password', component: SetPassword, canActivate: [guestGuard] },
      { path: 'reset-password', component: ResetPassword, canActivate: [guestGuard] },
      
      { path: 'dashboard', component: Dashboard, canActivate: [authGuard] },
      
      { path: '', redirectTo: 'login', pathMatch: 'full' } 
    ]
  }
];