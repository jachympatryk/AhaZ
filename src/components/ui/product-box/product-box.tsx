import React from 'react';
import { Typography } from '@mui/material';

import { ProductBoxProps } from './product-box.types';

import styles from './product-box.module.scss';

export const ProductBox: React.FC<ProductBoxProps> = ({ image, name, price }) => {
  return (
    <div className={styles.productBox}>
      <img src={image} className={styles.image} alt="new product" />
      <div className={styles.wrapper}>
        <Typography variant="h3">{name}</Typography>
        <Typography variant="h4">${price}</Typography>
      </div>
    </div>
  );
};
