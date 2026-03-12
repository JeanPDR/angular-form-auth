import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { map } from "rxjs";

export const guestGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    router.navigate(['/dashboard']);
    return false;
  }

  return authService.validateSession().pipe(
    map(isValid => {
      if (isValid) {
        router.navigate(['/dashboard']); 
        return false;
      } else {
        return true; 
      }
    })
  );
};