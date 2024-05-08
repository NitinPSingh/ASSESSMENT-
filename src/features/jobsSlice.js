
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postApi } from "../Api/services";

const initialState = {
  jobs: [],
  loading: true,
  offset:0,
  message: "",
};
export const fetchJobs = createAsyncThunk("jobs/fetchJobData", async (payload) => {
  const data = await postApi(
    "https://api.weekday.technology/adhoc/getSampleJdJSON",
    payload
  );
  return data;
});

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
    },
    extraReducers(builder) {
      builder
        .addCase(fetchJobs.pending, (state, action) => {
          state.loading = true;
        })
        .addCase(fetchJobs.fulfilled, (state, action) => {
          state.jobs = [...state.jobs,...action.payload.data.jdList];
          state.offset += 10;
          state.loading = false;
        })
        .addCase(fetchJobs.rejected, (state, action) => {
          state.loading = false;
          state.message = "something wents wrong. Try again";
        });
    },
  });
  export const {} = jobSlice.actions;
  export default jobSlice.reducer;