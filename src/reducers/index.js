import { combineReducers } from 'redux';
import posts from "./posts";
import search from "./search"

export default combineReducers({
  posts,
  search,
})
