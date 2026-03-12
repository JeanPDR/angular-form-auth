import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private authService = inject(AuthService);
  
  
  
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    // remember: [false] (implementar no futuro)
  });

  onSubmit() {
  if (this.loginForm.valid) {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.authService.setLoggedState(true); 
        
        this.router.navigate(['/dashboard']); 
      },
      error: (err) => {
        console.error('Erro no login', err);
      }
    });
    }
  }

}
