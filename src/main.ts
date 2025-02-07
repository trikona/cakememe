import { bootstrapApplication } from '@angular/platform-browser';
import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { CartService } from './app/services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <nav class="navbar">
      <div class="container">
        <a routerLink="/" class="brand">Cake Shop</a>
        <a routerLink="/cart" class="cart-link">
          Cart ({{itemCount()}})
        </a>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background: white;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 1rem 0;
      margin-bottom: 2rem;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .brand {
      font-size: 1.5rem;
      font-weight: bold;
      color: #2c3e50;
      text-decoration: none;
    }
    .cart-link {
      color: #e74c3c;
      text-decoration: none;
      font-weight: bold;
    }
  `]
})
export class App {
  private cartService = inject(CartService);
  itemCount = computed(() => this.cartService.getItems().length);
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});