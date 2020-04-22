import constants from "../../constants"

export const set = searchKeyword => ({
  type: constants.SEARCH,
  data: searchKeyword
})
