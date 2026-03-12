import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment'; 
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl || 'http://localhost:3000'; 

  isLoggedIn = signal<boolean>(false); 

  login(credentials: any) {
    return this.http.post(`${this.apiUrl}/login`, credentials, {
      withCredentials: true 
    });
  }

  setLoggedState(status: boolean) {
    this.isLoggedIn.set(status);
  }

  validateSession() {
    return this.http.get(`${this.apiUrl}/me`, { withCredentials: true }).pipe(
      map(() => {
        this.setLoggedState(true); // Token é válido!
        return true;
      }),
      catchError(() => {
        this.setLoggedState(false); // Token expirou ou não existe
        return of(false);
      })
    );
  }
}