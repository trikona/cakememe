import { Component } from '@angular/core';
import { CakeCardComponent } from '../../components/cake-card/cake-card.component';
import { CAKES } from '../../data/cakes.data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CakeCardComponent],
  template: `
    <div class="container">
      <h1>Welcome to Our Cake Shop</h1>
      <div class="cake-grid">
        @for (cake of cakes; track cake.id) {
          <app-cake-card [cake]="cake"></app-cake-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    h1 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 2rem;
    }
    .cake-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
  `]
})
export class HomeComponent {
  cakes = CAKES;
}