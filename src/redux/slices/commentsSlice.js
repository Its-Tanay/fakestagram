import { createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: "comments",
    initialState: {
        comments: [],
    },

    reducers: {
        createComment: (state, action) => {
            const newComment = action.payload;
            return {
                ...state,
                comments: [newComment, ...state.comments],
            };
        },
    },
});

export const { createComment } = commentsSlice.actions;

export default commentsSlice.reducer;