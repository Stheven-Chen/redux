import { createSlice } from '@reduxjs/toolkit';

const initialState: { user: any; nama: any } = {
  user: "",
  nama: "",
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.nama = action.payload.nama;
    },
    logout: (state) => {
      state.user = "";
      state.nama = "";
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;

export type RootState = ReturnType<typeof userSlice.reducer>;
