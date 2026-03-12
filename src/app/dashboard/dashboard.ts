import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

  private authService = inject(AuthService);
  private router = inject(Router);

  onLogout() {
    this.authService.logout().subscribe({
      next: () => {
        this.authService.setLoggedState(false);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('Erro ao terminar sessão na API', err);
        this.authService.setLoggedState(false);
        this.router.navigate(['/login']);
      }
    });
  }

}
