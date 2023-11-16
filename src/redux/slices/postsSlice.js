import { createSlice } from "@reduxjs/toolkit";
import posts from "../../utils/posts.json"

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: posts,
    },

    reducers: {
        createPost: (state, action) => {
            const newPost = { id: state.posts.length + 1, ...action.payload };
            return {
                ...state,
                posts: [newPost, ...state.posts],
            };
        },
    },
});

export const { createPost } = postsSlice.actions;

export default postsSlice.reducer;
