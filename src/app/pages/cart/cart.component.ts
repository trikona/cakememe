import { Component, computed, effect, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { loadScript } from "@paypal/paypal-js";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container">
      <h1>Shopping Cart</h1>
      @if (items().length === 0) {
        <p>Your cart is empty</p>
      } @else {
        <div class="cart-items">
          @for (item of items(); track item.cake.id) {
            <div class="cart-item">
              <img [src]="item.cake.imageUrl" [alt]="item.cake.title" class="cart-item-image">
              <div class="cart-item-details">
                <h3>{{item.cake.title}}</h3>
                <p>\${{item.cake.price}}</p>
                <div class="quantity-controls">
                  <button (click)="updateQuantity(item.cake.id, item.quantity - 1)">-</button>
                  <span>{{item.quantity}}</span>
                  <button (click)="updateQuantity(item.cake.id, item.quantity + 1)">+</button>
                </div>
                <button class="remove-btn" (click)="removeItem(item.cake.id)">Remove</button>
              </div>
            </div>
          }
        </div>
        <div class="cart-summary">
          <h2>Total: \${{total()}}</h2>
          <div #paypalButtons class="paypal-buttons"></div>
        </div>
      }
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 2rem;
    }
    .cart-item {
      display: flex;
      gap: 1rem;
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .cart-item-image {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 4px;
    }
    .cart-item-details {
      flex: 1;
    }
    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin: 1rem 0;
    }
    .quantity-controls button {
      padding: 0.25rem 0.5rem;
      border: 1px solid #ddd;
      background: white;
      border-radius: 4px;
      cursor: pointer;
    }
    .remove-btn {
      padding: 0.5rem 1rem;
      background: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .cart-summary {
      background: white;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
  `]
})
export class CartComponent {
  private cartService = inject(CartService);
  private router = inject(Router);

  items = computed(() => this.cartService.getItems());
  total = computed(() => this.cartService.getTotal());

  constructor() {
    effect(() => {
      if (this.items().length > 0) {
        this.initPayPal();
      }
    });
  }

  async initPayPal() {
    /**
    try {
      const paypal = await loadScript({ 
        clientId: "test", // Replace with your PayPal client ID in production
        currency: "USD"
      });

      if (paypal) {
        paypal.Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.total().toFixed(2)
                }
              }]
            });
          },
          onApprove: async (data: any, actions: any) => {
            const order = await actions.order.capture();
            this.cartService.clearCart();
            alert('Payment successful! Order ID: ' + order.id);
            this.router.navigate(['/']);
          }
        }).render('.paypal-buttons');
      }
    } catch (error) {
      console.error('Failed to load PayPal JS SDK', error);
    }
    */
  }

  updateQuantity(cakeId: number, quantity: number) {
    this.cartService.updateQuantity(cakeId, quantity);
  }

  removeItem(cakeId: number) {
    this.cartService.removeFromCart(cakeId);
  }
}