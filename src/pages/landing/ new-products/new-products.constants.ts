import { ProductBoxProps } from 'components/ui/product-box/product-box.types';

import product1 from 'assets/images/product-1.webp';
import product2 from 'assets/images/product-2.webp';
import product3 from 'assets/images/product-3.webp';

export const newProductsData: ProductBoxProps[] = [
  {
    name: 'AhaZ pants',
    image: product1,
    price: 200,
  },
  {
    name: 'AhaZ jacket',
    image: product2,
    price: 200,
  },
  {
    name: 'AhaZ sweater',
    image: product3,
    price: 200,
  },
];
