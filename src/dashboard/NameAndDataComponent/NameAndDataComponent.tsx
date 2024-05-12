import React from 'react';
import styles from './NameAndDataComponent.module.css';

interface NameAndDataProps {
  name: string;
  data: string;
}

export const NameAndDataComponent: React.FC<NameAndDataProps> = ({ name, data }) => (
  <div className={styles.container}>
    <h1 className={styles.name}>{name}</h1>
    <p className={styles.data}>{data}</p>
  </div>
);