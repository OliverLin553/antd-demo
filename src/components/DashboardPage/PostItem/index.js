import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

import Actions from '../../../actions';

export class PostItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      edit: false,
      title: props.post.title
    }
  }

  handleClick() {
    const { edit } = this.state;

    this.setState({ edit: !edit });
  }

  handleChange(event) {
    const stateKey = event.target.name;

    this.setState({
      [stateKey]: event.target.value
    });
  }

  handleBlur() {
    const { actions, post } = this.props;
    const { edit, title } = this.state;

    actions.posts.updatePost(post.id, { title });

    this.setState({ edit: !edit });
  }

  renderDefault() {
    const { title } = this.state;

    return (
      <div onClick={() => { this.handleClick() }}>{title}</div>
    )
  }

  renderEdit() {
    const { title } = this.state;

    return (
      <input
        value={title}
        name="title"
        autoFocus="autofocus"
        onChange={(event) => { this.handleChange(event) }}
        onBlur={() => { this.handleBlur() }}
      />
    )
  }

  render() {
    const { edit } = this.state;

    return (
      <Fragment>
        {!edit && this.renderDefault()}
        {edit && this.renderEdit()}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    posts: bindActionCreators(Actions.posts, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(PostItem)
