import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice"

export default configureStore({
    reducer: {
        posts: postsReducer,
    },
});