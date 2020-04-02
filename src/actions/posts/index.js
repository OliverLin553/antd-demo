import constants from "../../constants";
import * as client from "../../client";

export const fetch = () => {
  return (dispatch) => {
    return client.fetchPosts().then(({ data }) => {
      dispatch({
        type: constants.POSTS_INIT,
        payload: data
      });
    });
  };
}

export const updatePost = (id, data) => {
  return (dispatch) => {
    return client.updatePost(id, data).then(payload => {
      dispatch({
        type: constants.POST_UPDATE,
        payload: payload.data
      })
    });
  };
}
