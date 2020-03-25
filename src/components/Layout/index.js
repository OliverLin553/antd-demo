import React from 'react';
import styles from './style.module.css';

function Layout({ children }) {
  return (
    <header className={styles["app-header"]}>
      {children}
    </header>
  );
}

export default Layout;
