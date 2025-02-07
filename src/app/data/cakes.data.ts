import { Cake } from '../models/cake.model';

export const CAKES: Cake[] = [
  {
    id: 1,
    title: 'Chocolate Dream',
    description: 'Rich chocolate layers with ganache filling',
    price: 35.99,
    imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
    details: 'Three layers of moist chocolate cake filled with dark chocolate ganache and covered in chocolate buttercream.',
    location: 'Main Street Bakery, Downtown'
  },
  {
    id: 2,
    title: 'Strawberry Delight',
    description: 'Fresh strawberry cake with cream cheese frosting',
    price: 32.99,
    imageUrl: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
    details: 'Light and fluffy strawberry cake made with fresh berries, layered with cream cheese frosting.',
    location: 'Sweet Corner, Uptown'
  },
  {
    id: 3,
    title: 'Vanilla Bean Supreme',
    description: 'Classic vanilla cake with Madagascar vanilla beans',
    price: 30.99,
    imageUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3',
    details: 'Premium vanilla cake made with real Madagascar vanilla beans and buttercream frosting.',
    location: 'Cake Paradise, West End'
  }
];