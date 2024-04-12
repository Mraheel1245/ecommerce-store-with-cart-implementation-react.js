import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) ?? null,
  },
  reducers: {
    login: (state, user) => {
      console.log("state");
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      state.user = user;
    },
    register: (state) => {
      state.value -= 1;
    },
  },
});

export const { login, register } = authSlice.actions;

export const store = configureStore({
  reducer: authSlice.reducer,
});
