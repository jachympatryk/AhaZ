import React from 'react';
import { IconButton } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import styles from './navbar.module.scss';

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <Logo />
      <div className={styles.navigation}>
        <IconButton className={styles.button}>
          <LocalMallIcon />
        </IconButton>
        <IconButton className={styles.button}>
          <MenuIcon />
        </IconButton>
      </div>
    </div>
  );
};
