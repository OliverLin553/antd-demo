import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Input } from 'antd';

import Actions from '../../actions';
import PostItem from './PostItem';

import styles from "./style.module.css";

export class DashboardPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      addPostValue: '',
    }
  }

  refineSearchResults() {
    const { posts, searchKeyword } = this.props;

    let onList = []

    posts.forEach((t) => {
      if (t.title.toLowerCase().indexOf(searchKeyword.toLowerCase()) >= 0) {
        onList.push(t)
      }
    })

    return {
      onList
    }
  }

  renderTitle() {
    return this.refineSearchResults().onList.map(post => ( <PostItem key={post.id} post={post} /> ));
  }

  handleOnSearch(searchKeyword) {
    const { actions } = this.props;

    actions.search.set(searchKeyword)
  }

  handlePressEnterPost(event) {
    const { actions } = this.props;

    actions.posts.createPost({ title: event.target.value });
    this.setState({
      addPostValue: ''
    });
  }

  handleOnChangePost(event) {
    this.setState({
      addPostValue: event.target.value
    });
  }

  render() {
    const { posts } = this.props;
    const postLength =  posts.length;
    const { Search } = Input;
    const { addPostValue } = this.state;

    return (
      <Fragment>
        <img src="https://create-react-app.dev/img/logo.svg" className={styles["app-logo"]} alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Search
          placeholder="input search text"
          size="large"
          enterButton
          onSearch={searchKeyword => {
            this.handleOnSearch(searchKeyword)
          }}
          style={{ width: 600 }}
        />
        <div className={styles['posts-container']}>
          <Input
            value={addPostValue}
            className={styles['add-post-input']}
            placeholder="add post"
            onPressEnter={event => { this.handlePressEnterPost(event) }}
            onChange={event => { this.handleOnChangePost(event) }}
          />
          {this.renderTitle()}
          <div className={styles.footer}>
            {postLength} item
          </div>
        </div>
      </Fragment>
    );
  }
}

export const mapStateToProps = state => ({
  posts: state.posts,
  searchKeyword: state.search,
});

const mapDispatchToProps = dispatch => ({
  actions: {
    search: bindActionCreators(Actions.search, dispatch),
    posts: bindActionCreators(Actions.posts, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage)
