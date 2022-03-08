import { createSlice } from '@reduxjs/toolkit';

export const pollutionSlice = createSlice({
  name: 'pollution',
  initialState: { pollutionData: {} },
  reducers: {
    fetchPollution(state, action) {
      state.pollutionData = action.payload;
    },
  },
});

export const { fetchPollution } = pollutionSlice.actions;

export default pollutionSlice.reducer;
