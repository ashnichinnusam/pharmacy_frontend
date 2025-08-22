import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Import FormsModule
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- Add FormsModule here
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // optional if you have CSS
})
export class LoginComponent {
  credentials = { email: '', password: '' };
  message = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.login(this.credentials).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.message = 'Login successful!';
      },
      error: () => {
        this.message = 'Invalid credentials!';
      }
    });
  }
}


