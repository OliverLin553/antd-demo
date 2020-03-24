import React from 'react';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://create-react-app.dev/img/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
