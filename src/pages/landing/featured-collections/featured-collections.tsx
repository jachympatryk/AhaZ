import React from 'react';
import { Typography } from '@mui/material';
import classNames from 'classnames';

import { featuredCollectionsData } from './featured-collections.constants';

import styles from './featured-collections.module.scss';
import mainStyles from '../landing.module.scss';

export const FeaturedCollections = () => {
  return (
    <div className={classNames(mainStyles.containerItem, styles.container)}>
      <div className={styles.header}>
        <Typography variant="h2">Featured Collections</Typography>
        <Typography variant="h3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem dicta ea incidunt laudantium odio
          possimus sint soluta ut vitae.
        </Typography>
      </div>
      <div className={styles.content}>
        {featuredCollectionsData.map(({ label, image }) => (
          <div className={styles.collectionBox}>
            <Typography variant="h4">{label}</Typography>
            <img src={image} alt="collections" />
          </div>
        ))}
      </div>
    </div>
  );
};
