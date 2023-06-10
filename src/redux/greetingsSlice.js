import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3000/api/greetings';

const initialState = {
  greetings: [],
  isLoading: true,
};

export const getGreetings = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  },
);

const greetingsSlice = createSlice({
  name: 'greetings',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGreetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.greetings = action.payload;
      })
      .addCase(getGreetings.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default greetingsSlice.reducer;
