import React from 'react';

import { PageProps } from './page.types';
import { Footer, Navbar } from 'components';

import styles from './page.module.scss';

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
};
