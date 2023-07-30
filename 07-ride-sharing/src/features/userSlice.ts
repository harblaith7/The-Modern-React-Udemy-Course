import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  value: {
    user: User;
    isLoading: boolean;
  };
}

type User = {
  id: string;
  email: string;
  name: string;
  avatarUrl: string;
} | null;

const initialState: UserState = {
  value: { user: null, isLoading: true },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    initializeUser: (state, action: PayloadAction<User>) => {
      state.value.user = action.payload;
      state.value.isLoading = false;
    },
    loadingUser: (state) => {
      state.value.isLoading = true;
    },
  },
});

export const { initializeUser, loadingUser } = userSlice.actions;

export default userSlice.reducer;
