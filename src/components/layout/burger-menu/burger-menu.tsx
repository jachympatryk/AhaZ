import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { useDidUpdate } from '@better-typed/react-lifecycle-hooks';

import { menuData } from './burger-menu.constants';
import { useWindowSize } from 'hooks';

import styles from './burger-menu.module.scss';

export const BurgerMenu = () => {
  const { width } = useWindowSize();

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const isDesktop = width >= 768;

  useDidUpdate(
    () => {
      if (isDesktop) setIsMenuOpen(false);
    },
    [isDesktop],
    true,
  );

  return (
    <>
      <IconButton className={classNames(styles.button, styles.mobile)} onClick={handleMenu}>
        <MenuIcon />
      </IconButton>
      {isMenuOpen && (
        <div className={styles.menuContainer}>
          {menuData.map(({ label, path }) => (
            <Link to={path} className={styles.link}>
              {label}
            </Link>
          ))}
        </div>
      )}
      {isDesktop && (
        <div className={styles.menuContainer}>
          {menuData.map(({ label, path }) => (
            <Link to={path} className={styles.link}>
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
};
