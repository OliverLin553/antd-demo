import React from 'react';
import styles from "./style.module.css";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className={styles.Footer}>
      <div className={styles.Container}>
        ©2019-{date} Olin.
      </div>
    </div>
  );
}

export default Footer;
