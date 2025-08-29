import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

export interface Product {
  _id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    { _id: 1, name: 'Paracetamol', price: 20, image: 'assets/images/paracetamol.png', description: 'Pain reliever and fever reducer' },
    { _id: 2, name: 'Vitamin C', price: 50, image: 'assets/images/vitamin-c.png', description: 'Boosts immunity' },
    { _id: 3, name: 'Cough Syrup', price: 80, image: 'assets/images/cough-syrup.png', description: 'Relieves cough and sore throat' },
    { _id: 4, name: 'Skincare Lotion', price: 15, image: 'assets/images/skincare.png', description: 'For healthy skin' },
    { _id: 5, name: 'First Aid Kit', price: 25, image: 'assets/images/first-aid.png', description: 'Essential first aid supplies' },
    { _id: 6, name: 'Pain Relief Tablet', price: 8.5, image: 'assets/images/pain-relief.png', description: 'Quick pain relief' },
    { _id: 7, name: 'Vitamins', price: 12.99, image: 'assets/images/vitamins.png', description: 'Boosts energy and immunity' }
  ];

  getFeaturedProducts(): Product[] {
    // Example: pick first 2 as featured
    return this.products.slice(0, 2);
  }

  getNewArrivals(): Product[] {
    // Example: pick last 2 as new arrivals
    return this.products.slice(-2);
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p._id === id);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  constructor(private http: HttpClient) { }

  getProducts() {
  return this.http.get(`${environment.apiUrl}/products`);
}
}

