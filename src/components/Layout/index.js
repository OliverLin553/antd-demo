import React from 'react';
import styles from './style.module.css';

export default function Layout({ children }) {
  return (
    <header className={styles["app-header"]}>
      {children}
    </header>
  );
}
