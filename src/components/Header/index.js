import React from 'react';
import styles from './style.module.css';

class Header extends React.Component {
  render() {
    return (
      <div className={styles.Header}>
        <div className={styles.Container}>
          <div className={styles.Logo}>
            <a href='/'>logo</a>
          </div>
          <div className={styles.Menu}>
            <a href='/'>DashboardPage</a>
            <a href='/table'>table</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
