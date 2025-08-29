import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink], 
  template: `
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm" style="background-color: #f8f9fa;">
    <div class="container">
      <a class="navbar-brand fw-bold" routerLink="/">MediCare</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a class="nav-link" href="#shop">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/products">Products</a></li>
          <li class="nav-item"><a class="nav-link" routerLink="/cart">Cart</a></li>

          <!-- Show Login & Register when NOT logged in -->
          <ng-container *ngIf="!authService.isLoggedIn(); else loggedInLinks">
            <li class="nav-item"><a class="nav-link" routerLink="/login">Login</a></li>
            <li class="nav-item"><a class="nav-link" routerLink="/register">Sign Up</a></li>
          </ng-container>

          <!-- Show Logout when logged in -->
          <ng-template #loggedInLinks>
            <li class="nav-item">
              <a class="nav-link" href="#" (click)="logout()">Logout</a>
            </li>
          </ng-template>
        </ul>
      </div>
    </div>
  </nav>

  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css']
})
export class AppComponent {
  constructor(public authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}






