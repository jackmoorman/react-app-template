import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => (state += 1),
    decrement: (state) => (state -= 1),
  },
});

export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;
