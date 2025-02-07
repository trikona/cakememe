import { Injectable, signal } from '@angular/core';
import { Cake } from '../models/cake.model';

export interface CartItem {
  cake: Cake;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  addToCart(cake: Cake) {
    const currentItems = this.cartItems();
    const existingItem = currentItems.find(item => item.cake.id === cake.id);

    if (existingItem) {
      this.cartItems.update(items =>
        items.map(item =>
          item.cake.id === cake.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      this.cartItems.update(items => [...items, { cake, quantity: 1 }]);
    }
  }

  removeFromCart(cakeId: number) {
    this.cartItems.update(items => items.filter(item => item.cake.id !== cakeId));
  }

  updateQuantity(cakeId: number, quantity: number) {
    if (quantity <= 0) {
      this.removeFromCart(cakeId);
      return;
    }

    this.cartItems.update(items =>
      items.map(item =>
        item.cake.id === cakeId
          ? { ...item, quantity }
          : item
      )
    );
  }

  getItems() {
    return this.cartItems();
  }

  getTotal() {
    return this.cartItems().reduce(
      (total, item) => total + item.cake.price * item.quantity,
      0
    );
  }

  clearCart() {
    this.cartItems.set([]);
  }
}