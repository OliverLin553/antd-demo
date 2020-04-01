import axios from "axios"

const headersInfo = () => ({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const apiUrl = "http://localhost:3003/posts"

export const fetchPosts = () => axios.get(apiUrl, {
  headers: headersInfo()
});
