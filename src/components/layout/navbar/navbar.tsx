import React from 'react';
import { IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import { BurgerMenu } from 'components';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <header className={styles.container}>
      <Logo />
      <div className={styles.navigation}>
        <IconButton className={styles.button}>
          <LocalMallIcon />
        </IconButton>
        <BurgerMenu />
      </div>
    </header>
  );
};
