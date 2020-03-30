import React from 'react';
import Layout from '../Layout';
import Header from "../Header";
import Footer from '../Footer'
import './style.css';

class App extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <Layout>
          {children}
        </Layout>
        <Footer/>
      </div>
    );
  }
}

export default App;
