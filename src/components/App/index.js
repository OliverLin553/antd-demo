import React from 'react';
import { Button } from 'antd';
import Layout from '../Layout'
import Footer from '../Footer'
import './style.css';

function App() {
  return (
    <div className="App">
      <Layout>
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
        <Button type="primary">Button</Button>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
