import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CAKES } from '../../data/cakes.data';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cake-detail',
  standalone: true,
  template: `
    <div class="container">
      @if (cake) {
        <div class="cake-detail">
          <img [src]="cake.imageUrl" [alt]="cake.title" class="cake-image">
          <div class="cake-info">
            <h1>{{cake.title}}</h1>
            <p class="price">\${{cake.price}}</p>
            <p class="description">{{cake.description}}</p>
            <div class="details">
              <h2>Details</h2>
              <p>{{cake.details}}</p>
              <h2>Where to Buy</h2>
              <p>{{cake.location}}</p>
            </div>
            <button class="btn primary" (click)="addToCart()">Add to Cart</button>
          </div>
        </div>
      } @else {
        <p>Cake not found</p>
      }
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .cake-detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
    .cake-image {
      width: 100%;
      height: 500px;
      object-fit: cover;
      border-radius: 8px;
    }
    .cake-info {
      padding: 1rem;
    }
    h1 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }
    .price {
      font-size: 1.5rem;
      font-weight: bold;
      color: #e74c3c;
      margin-bottom: 1rem;
    }
    .description {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
    .details {
      margin-bottom: 2rem;
    }
    .details h2 {
      color: #2c3e50;
      margin: 1rem 0;
    }
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
    }
    .primary {
      background: #e74c3c;
      color: white;
    }
  `]
})
export class CakeDetailComponent {
  private route = inject(ActivatedRoute);
  private cartService = inject(CartService);
  private router = inject(Router);
  
  cake = CAKES.find(c => c.id === Number(this.route.snapshot.paramMap.get('id')));

  addToCart() {
    if (this.cake) {
      this.cartService.addToCart(this.cake);
      alert('Added to cart! Go to cart to checkout.');
    }
  }
}