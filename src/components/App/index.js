import React from 'react';
import { Button } from 'antd';
import Layout from '../Layout';
import Header from "../Header";
import Table from '../Table';
import Footer from '../Footer'
import './style.css';
import styles from './style.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Layout>
        <Header />
        <img src="https://create-react-app.dev/img/logo.svg" className={styles["app-logo"]} alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles["app-link"]}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>

        <Table />
        <Footer/>
      </Layout>
    </div>
  );
}

export default App;
