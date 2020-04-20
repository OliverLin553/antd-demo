import React from 'react';
import { bindActionCreators } from "redux"
import Actions from '../../actions'
import Layout from '../Layout';
import Header from "../Header";
import Footer from '../Footer'
import './style.css';
import { connect } from "react-redux";

export class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.resources.fetch()
  }

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

const mapDispatchToProps = dispatch => ({
  actions: {
    resources: bindActionCreators(Actions.resources, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(App)
