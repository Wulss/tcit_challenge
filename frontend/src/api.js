import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:5000",
});

export const listPosts = () => api.get("/posts");
export const createPost = (post) => api.post("/posts", post);
export const deletePost = (id) => api.delete(`/posts/${id}`);