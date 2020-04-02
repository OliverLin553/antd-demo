import constants from "../../constants"

export default (state = [], action) => {
  switch (action.type) {
    case constants.POSTS_INIT: {
      return action.payload
    }

    case constants.POST_UPDATE: {
      return state.map(post => post.id === action.payload.id ? { ...post, title: action.payload.title } : post)
    }

    default: {
      return state
    }
  }
}
