import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductService, Product } from '../services/product.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  quantities: { [key: number]: number } = {}; // store quantity per product

  constructor(private productService: ProductService, public cartService: CartService) {
    this.products = this.productService.getAllProducts();
    // initialize quantity for each product
    this.products.forEach(p => this.quantities[p._id] = 1);
  }

  addToCart(product: Product) {
    const qty = this.quantities[product._id] || 1;
    this.cartService.addToCart(product, qty);
  }
}

