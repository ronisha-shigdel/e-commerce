import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ email, password }, thunkAPI) => {
    console.log("API call: Logging in with", email, password);
    return { email };
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
