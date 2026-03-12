import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment'; // Ajuste o caminho se necessário

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
}