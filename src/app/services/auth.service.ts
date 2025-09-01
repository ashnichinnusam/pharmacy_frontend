import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://pharmacy-backend-1-x5mn.onrender.com/api/auth'; // backend URL
  private tokenKey = 'auth_token'; // key to store token in localStorage

  constructor(private http: HttpClient) {}

  // Login API call
  login(credentials: { email: string; password: string }): Observable<any> {
    return new Observable((observer) => {
      this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials)
        .subscribe({
          next: (res) => {
            if (res.token) {
              this.setToken(res.token); // store JWT
            }
            observer.next(res);
          },
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
    });
  }

  // Registration API call
  register(data: { name: string; email: string; password: string }): Observable<any> {
    return new Observable((observer) => {
      this.http.post<{ token?: string }>(`${this.apiUrl}/register`, data)
        .subscribe({
          next: (res) => {
            if (res.token) {
              this.setToken(res.token); // optional: store JWT if backend sends it
            }
            observer.next(res);
          },
          error: (err) => observer.error(err),
          complete: () => observer.complete()
        });
    });
  }

  // Store token in localStorage
  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  // Get token from localStorage
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Remove token on logout
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}

