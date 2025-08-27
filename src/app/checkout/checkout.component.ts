import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  customer = {
    name: '',
    email: '',
    phone: '',
    address: ''
  };

  paymentMethod = 'cod';
  upiId: string = '';
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService, private router: Router) {
    this.cartItems = this.cartService.getItems();
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalAmount = this.cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );
  }

  placeOrder() {
    if (!this.customer.name || !this.customer.address || !this.customer.phone) {
      alert('Please fill all required details');
      return;
    }

    if (this.paymentMethod === 'upi' && !this.upiId) {
      alert('Please enter your UPI ID to proceed with UPI payment');
      return;
    }

    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/']); // Redirect to home
  }

  goHome() {
    this.router.navigate(['/']);
  }
}




