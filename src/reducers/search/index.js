import constants from "../../constants"

export default (state = "", action) => {
  switch (action.type) {
    case constants.SEARCH:
      return action.data
    default:
      return state
  }
}
