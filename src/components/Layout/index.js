import React from 'react';
import './style.css';

function Layout({ children }) {
  return (
    <header className="App-header">
      {children}
    </header>
  );
}

export default Layout;
