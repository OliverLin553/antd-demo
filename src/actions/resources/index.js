import Actions from "../"

export const fetch = () => {
  return (dispatch) => {
    dispatch(Actions.posts.fetchPost())
  }
}
