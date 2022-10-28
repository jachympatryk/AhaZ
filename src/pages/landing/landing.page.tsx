import React from 'react';

import { Hero } from './hero/hero';

import styles from './landing.module.scss';

export const LandingPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};
