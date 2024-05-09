import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import faqService from "./faqService";

export const getFaqs = createAsyncThunk("faq/get-faqs", async (thunkAPI) => {
  try {
    return await faqService.getFaqs();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const initialState = {
  faqs: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const faqSlice = createSlice({
  name: "faqs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getFaqs
      .addCase(getFaqs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFaqs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.faqs = action.payload;
      })
      .addCase(getFaqs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default faqSlice.reducer;
