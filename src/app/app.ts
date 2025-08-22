import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive], 
  template: `
    <header>
      <nav class="navbar">
        <div class="logo">
          <a routerLink="">Pharmacy</a>
        </div>
        <ul class="nav-links">
          <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">Home</a></li>
          <li><a routerLink="/products" routerLinkActive="active">Products</a></li>
          <li><a routerLink="/cart" routerLinkActive="active">Cart</a></li>

          <ng-container *ngIf="!authService.isLoggedIn(); else loggedIn">
            <li><a routerLink="/login" routerLinkActive="active">Login</a></li>
            <li><a routerLink="/register" routerLinkActive="active">Register</a></li>
          </ng-container>

          <ng-template #loggedIn>
            <li><a href="#" (click)="logout()">Logout</a></li>
          </ng-template>
        </ul>
      </nav>
    </header>

    <main class="main-container">
      <router-outlet></router-outlet>
    </main>

    <footer>
      <p>&copy; 2025 Pharmacy E-commerce</p>
    </footer>
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





