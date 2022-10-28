import React from 'react';
import { Button, Typography } from '@mui/material';

import image1 from 'assets/images/landing-hero-1.webp';
import image2 from 'assets/images/landing-hero-2.webp';

import styles from './hero.module.scss';

export const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Typography variant="h1">Elegance is good taste, plus a dash of daring</Typography>
        <Button className={styles.button}>show now</Button>
      </div>
      <div className={styles.content}>
        <div className={styles.imageBox}>
          <img src={image1} className={styles.image} alt="fashion" />
          <Typography variant="h3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem provident ratione.
          </Typography>
        </div>
        <div className={styles.imageBox}>
          <img src={image2} className={styles.image} alt="fashion" />
        </div>
      </div>
    </div>
  );
};
