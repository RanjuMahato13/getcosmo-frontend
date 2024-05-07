import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { suggestionService } from "./suggestionService";

export const createSuggestion = createAsyncThunk(
  "suggestion/post",
  async (suggestionData, thunkAPI) => {
    console.log(suggestionData);
    try {
      return await suggestionService.postSuggestion(suggestionData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const suggestionState = {
  suggestion: "",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const suggestionSlice = createSlice({
  name: "suggestion",
  initialState: suggestionState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createSuggestion.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(createSuggestion.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = true;
      state.suggestion = action.payload;
      toast.success("Suggestion Submitted Successfully");
    });
    builder.addCase(createSuggestion.rejected, (state, action) => {
      state.isError = true;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = action.error;
      toast.error("Something Went Wrong !");
    });
  },
});

export default suggestionSlice.reducer;
