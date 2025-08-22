import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  template: `
    <div style="max-width: 400px; margin: auto; padding: 20px;">
      <h2>Register</h2>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit()">
        <div>
          <label>Email</label>
          <input type="email" formControlName="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" formControlName="password" />
        </div>
        <button type="submit" [disabled]="registerForm.invalid">Register</button>
      </form>
      <p>Already have an account? <a [routerLink]="['/login']">Login here</a></p>
    </div>
  `
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      alert('Registration successful! Please login.');
      this.router.navigate(['/login']);
    }
  }
}

