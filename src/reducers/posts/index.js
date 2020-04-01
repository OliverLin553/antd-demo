import constants from "../../constants"

export default (state = null, { type, payload }) => {
  switch (type) {
    case constants.POSTS: {
      return payload
    }

    default: {
      return state
    }
  }
}
