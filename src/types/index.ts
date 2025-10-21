export interface User {
  id: string;
  username: string;
  email: string;
  cpf?: string;
}

export interface Product {
  id: string;
  name: string;
  dough: 'baunilha' | 'chocolate' | 'red-velvet';
  filling: 'nutella' | 'ninho' | 'maracuja' | 'beijinho';
  description: string;
  price: number;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  observation?: string;
}

export interface Order {
  items: CartItem[];
  address: string;
  deliveryDate: string;
  deliveryTime: string;
  paymentMethod: string;
  total: number;
}
