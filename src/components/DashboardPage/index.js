import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Actions from "../../actions"
import styles from "./style.module.css";

class DashboardPage extends React.Component {
  render() {
    console.log(this.props.posts)
    return (
      <div>
        <img src="https://create-react-app.dev/img/logo.svg" className={styles["app-logo"]} alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  posts: state.posts,
});

export const mapDispatchToProps = dispatch => ({
  actions: {
    posts: bindActionCreators(Actions.posts, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
