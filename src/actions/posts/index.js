import constants from "../../constants";
import * as client from "../../client";

export const fetchPost = () => {
  return (dispatch) => {
    return client.fetchPosts().then(({ data }) => {
      dispatch({
        type: constants.POSTS_INIT,
        payload: data
      });
    });
  };
};

export const updatePost = (id, data) => {
  return (dispatch) => {
    return client.updatePost(id, data).then(payload => {
      dispatch({
        type: constants.POST_UPDATE,
        payload: payload.data
      })
    });
  };
};

export const createPost = (data) => {
  return (dispatch) => {
    return client.createPost(data).then(payload => {
      dispatch({
        type: constants.POST_CREATE,
        payload: payload.data
      })
    });
  };
}
