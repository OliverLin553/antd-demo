import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PostItem from './PostItem';

import styles from "./style.module.css";

export class DashboardPage extends React.Component {
  renderTitle() {
    const { posts } = this.props;

    return posts.map(post => ( <PostItem key={post.id} post={post} /> ));
  }

  render() {
    return (
      <Fragment>
        <img src="https://create-react-app.dev/img/logo.svg" className={styles["app-logo"]} alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {this.renderTitle()}
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  posts: state.posts,
});

export default connect(mapStateToProps, null)(DashboardPage)
