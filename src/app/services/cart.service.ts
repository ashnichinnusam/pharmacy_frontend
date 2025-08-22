import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'cart';
  private cart: CartItem[] = [];

  constructor() {
    const savedCart = localStorage.getItem(this.cartKey);
    this.cart = savedCart ? JSON.parse(savedCart) : [];
  }

  private saveCart() {
    localStorage.setItem(this.cartKey, JSON.stringify(this.cart));
  }

  getItems(): CartItem[] {
    return this.cart;
  }

  addToCart(product: Product, quantity: number = 1) {
    const existing = this.cart.find(item => item.product._id === product._id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.cart.push({ product, quantity });
    }
    this.saveCart();
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(item => item.product._id !== productId);
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cart.find(i => i.product._id === productId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) this.removeFromCart(productId);
      this.saveCart();
    }
  }

  getTotalItems(): number {
    return this.cart.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
  }
}
