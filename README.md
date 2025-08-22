# Pharmacy E-commerce Web Application

A web-based Pharmacy application built with Angular for the frontend and Node.js/Express for the backend. This project allows users to view products, add them to the cart, and perform user authentication with JWT.  

---

## Features

### User Functionality
- User registration and login with JWT authentication.
- View featured products and new arrivals on the home page.
- Browse product list and view product details.
- Add, remove, and update product quantities in the shopping cart.
- Local storage integration for cart persistence.

### Admin Functionality (Future)
- Add, edit, and delete products.
- Manage orders and users.

---



## Project Structure

### Frontend (Angular)
- **Components**
  - `HomeComponent` – Displays featured products and new arrivals.
  - `ProductListComponent` – Shows all products in a grid.
  - `ProductDetailComponent` – Shows details for a single product.
  - `CartComponent` – Shows cart items and allows modifications.
  - `LoginComponent` – User login form.
  - `RegisterComponent` – User registration form.
- **Services**
  - `AuthService` – Handles login, registration, and JWT token storage.
  - `ProductService` – Manages product data (local or via backend).
  - `CartService` – Manages cart operations and local storage.
- **Guards**
  - `AuthGuard` – Protects routes requiring authentication.
- **Interceptor**
  - `JwtInterceptor` – Attaches JWT token to API requests.

### Backend (Node.js / Express)
- `routes/product.js` – API routes for products.
- `models/Product.js` – Product schema.
- `server.js` – Express server setup.

---
