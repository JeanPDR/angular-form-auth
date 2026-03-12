import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { map } from "rxjs";

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    return true;
  }

  return authService.validateSession().pipe(
    map(isValid => {
      if (isValid) {
        return true; 
      } else {
        router.navigate(['/login']); 
        return false;
      }
    })
  );
};