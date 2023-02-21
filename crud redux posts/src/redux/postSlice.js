import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  posts: [
    {
      id: uuidv4(),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAJBL2IlYkGo2WwsaKQtyHWqVbHTy9bKECaVkrc4hiGQ&s",
      title: "title1",
      description: "description1",
    },
  ],
};

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push({ ...action.payload, id: uuidv4() });
    },

    delPost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },

    putPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
    },
  },
});

export const {addPost,delPost,putPost} = postSlice.actions;

export default postSlice.reducer;
