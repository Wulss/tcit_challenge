import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as postsAPI from "../api";

export const listPosts = createAsyncThunk("posts/listPosts", async () => {
  const response = await postsAPI.listPosts();
  return response.data;
});

export const createPost = createAsyncThunk("posts/createPost", async (post) => {
  const response = await postsAPI.createPost(post);
  return response.data;
});

export const deletePost = createAsyncThunk("posts/deletePost", async (id) => {
  await postsAPI.deletePost(id);
  return id;
});

const postsSlice = createSlice({
  name: "posts",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listPosts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      return [...state, action.payload];
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    });
  },
});

export default postsSlice.reducer;
