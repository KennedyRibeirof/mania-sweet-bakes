import { Product } from '@/types';
import cookieNutella from '@/assets/cookie-nutella.jpg';
import cookieNinho from '@/assets/cookie-ninho.jpg';
import cookieMaracuja from '@/assets/cookie-maracuja.jpg';
import cookieBeijinho from '@/assets/cookie-beijinho.jpg';
import cookieRedVelvet from '@/assets/cookie-red-velvet.jpg';
import cookieDoceDeLeite from '@/assets/cookie-doce-de-leite.jpg';
import cookieBaunilha from '@/assets/cookie-baunilha.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Cookie de Chocolate com Nutella',
    dough: 'chocolate',
    filling: 'nutella',
    description: 'Delicioso cookie de massa de chocolate recheado com cremoso Nutella',
    price: 3.00,
    image: cookieNutella,
  },
  {
    id: '2',
    name: 'Cookie Red Velvet com Ninho',
    dough: 'red-velvet',
    filling: 'ninho',
    description: 'Cookie de massa red velvet com recheio de leite Ninho',
    price: 3.00,
    image: cookieRedVelvet,
  },
  {
    id: '3',
    name: 'Cookie de Baunilha com Nutella',
    dough: 'baunilha',
    filling: 'nutella',
    description: 'Cookie de massa de baunilha recheado com Nutella',
    price: 3.00,
    image: cookieBaunilha,
  },
  {
    id: '4',
    name: 'Cookie de Baunilha com Ninho',
    dough: 'baunilha',
    filling: 'ninho',
    description: 'Cookie de massa de baunilha com recheio de leite Ninho',
    price: 3.00,
    image: cookieBaunilha,
  },
  {
    id: '5',
    name: 'Cookie de Baunilha com Doce de Leite',
    dough: 'baunilha',
    filling: 'doce-de-leite',
    description: 'Cookie de massa de baunilha com delicioso recheio de doce de leite',
    price: 3.00,
    image: cookieBaunilha,
  },
  {
    id: '6',
    name: 'Cookie de Baunilha com Maracujá',
    dough: 'baunilha',
    filling: 'maracuja',
    description: 'Cookie de massa de baunilha com refrescante recheio de maracujá',
    price: 3.00,
    image: cookieBaunilha,
  },
  {
    id: '7',
    name: 'Cookie de Baunilha com Beijinho',
    dough: 'baunilha',
    filling: 'beijinho',
    description: 'Cookie de massa de baunilha com irresistível recheio de beijinho',
    price: 3.00,
    image: cookieBaunilha,
  },
];
