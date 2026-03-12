import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('go-platform-auth');

  private authService = inject(AuthService);

  ngOnInit() {
    // Quando o app inicia, verifica silenciosamente se o cookie ainda vale
    this.authService.validateSession().subscribe();
  }
}
