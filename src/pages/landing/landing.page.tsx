import React from 'react';

import { Hero } from './hero/hero';
import { NewProducts } from './ new-products/new-products';

import styles from './landing.module.scss';

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <NewProducts />
    </div>
  );
};
