import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        user: {
            username: "",
            password: "",
            fullName: "",
            email: "",
        },
        error: null,
        currentUser: {
            username: "Tanay",
            password: "123",
            fullName: "Tanay",
            email: "tanaytiw19@gmail.com",
        },
        successMessage: null,
    },

    reducers:{
        createUser: (state, action) => {

            const newUser = action.payload;
      
            const existingUser = state.users.find(
              (user) => user.username === newUser.username
            );
      
            if (existingUser) {
              state.error = "*Username already exists*";
              state.successMessage = null;
            } else {

              state.users.push(newUser);
              state.user = {
                username: "",
                password: "",
                fullName: "",
                email: "",
              };
              state.error = null; 
              state.successMessage = "User registered successfully";
            }
          },
          loginUser: (state, action) => {
            const { username, password } = action.payload;
            const loginUser = state.users.find(
              (user) => user.username === username && user.password === password
            );
      
            if (loginUser) {
              state.currentUser = loginUser;
              state.error = null;
            } else {
              state.error = "*Invalid username or password*";
            }
          },
    }
})

export const { createUser, loginUser } = userSlice.actions;
export default userSlice.reducer;