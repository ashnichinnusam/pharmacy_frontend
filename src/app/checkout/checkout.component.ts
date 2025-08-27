import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
  cartItems: any[] = [];
  totalAmount: number = 0;

  constructor(private cartService: CartService) {
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

    // Later: Send this data to backend API
    alert('Order placed successfully!');
    this.cartService.clearCart();
  }
}

