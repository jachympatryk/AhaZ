import React from 'react';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

import { footerLinks } from './footer.constants';

import { ReactComponent as Logo } from 'assets/icons/logo.svg';

import styles from './footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.company}>
          <Logo />
          <Typography variant="h3">Lorem ipsum dolor sit amet.</Typography>
        </div>
        <div className={styles.links}>
          {footerLinks.map((link) => (
            <div className={styles.item}>
              <Typography variant="h5">{link.label}</Typography>
              <div>
                {link.links.map(({ label, path }) => (
                  <Link className={styles.link} to={path}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Typography variant="h4">@AhaZ 2022. All rights reserved.</Typography>
    </div>
  );
};
