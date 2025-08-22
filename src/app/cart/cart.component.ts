import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService, CartItem } from '../services/cart.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public cartService: CartService) {}

  updateQuantity(item: CartItem, quantity: number) {
    if (quantity <= 0) return;
    this.cartService.updateQuantity(item.product._id, quantity);
  }

  removeItem(item: CartItem) {
    this.cartService.removeFromCart(item.product._id);
  }
}

