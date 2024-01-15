import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
  name: "quotes",
  initialState: {
    isLoading: false,
    isError: false,
    quoteData: { id: 1, content: "jine k hai char din", author: "salman khan" },
  },
  // reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuote.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchQuote.fulfilled, (state, action) => {
        state.isLoading = false;
        state.quoteData = action.payload;
        state.isError = false;
      })
      .addCase(fetchQuote.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.quoteData = null;
      });
  },
});

export default quoteSlice.reducer;

export const fetchQuote = createAsyncThunk("FETCH/QUOTE", async () => {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  return data;
});
