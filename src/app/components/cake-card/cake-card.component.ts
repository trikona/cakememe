import { Component, Input, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Cake } from '../../models/cake.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cake-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="card">
      <img [src]="cake.imageUrl" [alt]="cake.title" class="card-image">
      <div class="card-content">
        <h2>{{cake.title}}</h2>
        <p>{{cake.description}}</p>
        <p class="price">\${{cake.price}}</p>
        <div class="button-group">
          <button class="btn primary" (click)="addToCart()">Add to Cart</button>
          <a [routerLink]="['/cake', cake.id]" class="btn secondary">View Details</a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      overflow: hidden;
      transition: transform 0.2s;
    }
    .card:hover {
      transform: translateY(-5px);
    }
    .card-image {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
    .card-content {
      padding: 1rem;
    }
    .price {
      font-size: 1.25rem;
      font-weight: bold;
      color: #2c3e50;
    }
    .button-group {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }
    .btn {
      padding: 0.5rem 1rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      text-decoration: none;
      text-align: center;
    }
    .primary {
      background: #e74c3c;
      color: white;
    }
    .secondary {
      background: #ecf0f1;
      color: #2c3e50;
    }
  `]
})
export class CakeCardComponent {
  @Input() cake!: Cake;
  private cartService = inject(CartService);

  addToCart() {
    this.cartService.addToCart(this.cake);
    alert('Added to cart! Go to cart to checkout.');
  }
}