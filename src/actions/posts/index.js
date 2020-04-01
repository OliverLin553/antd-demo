import constants from "../../constants";
import * as client from "../../client";

export const fetch = () => {
  return (dispatch) => {
    return client.fetchPosts().then(({ data }) => {
      dispatch({
        type: constants.POSTS,
        payload: data
      });
    });
  };
}
