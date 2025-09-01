import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // import FormsModule
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = { name: '', email: '', password: '' };
  message = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
  this.authService.register(this.user).subscribe({
    next: (response: any) => {
      this.message = response?.message || 'Registration successful!';
    },
    error: (err) => {
      console.error('Registration error:', err);
      this.message = err.error?.message || 'Registration failed!';
    }
  });
}

}

