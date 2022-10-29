import React from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import { newProductsData } from './new-products.constants';
import { ProductBox } from 'components';

import mainStyles from '../landing.module.scss';
import styles from './new-products.module.scss';

export const NewProducts = () => {
  return (
    <div className={classNames(mainStyles.containerItem, styles.container)}>
      <div className={styles.header}>
        <Typography variant="h2">New In</Typography>
        <div className={styles.wrapper}>
          <Typography variant="h3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque cupiditate dolorem ea est quidem,
            voluptatibus?
          </Typography>
          <div>items</div>
        </div>
      </div>
      <div className={styles.content}>
        {newProductsData.map(({ name, price, image }) => (
          <ProductBox name={name} image={image} price={price} />
        ))}
      </div>
    </div>
  );
};
