import axios from "axios"

const headersInfo = () => ({
  Accept: "application/json",
  "Content-Type": "application/json"
});

const apiUrl = "http://localhost:3003"

export const fetchPosts = () => axios.get(`${apiUrl}/posts`, {
  headers: headersInfo()
});

export const updatePost = (id, data) => axios.put(`${apiUrl}/posts/${id}`, data,{
  headers: headersInfo()
});

export const createPost = (data) => axios.post(`${apiUrl}/posts`, data,{
  headers: headersInfo()
});
