import { createSlice } from '@reduxjs/toolkit';

export const pollutionSlice = createSlice({
  name: 'pollution',
  initialState: { pollutionData: {}, logged: false },
  reducers: {
    fetchPollution(state, action) {
      state.pollutionData = action.payload;
    },
    login(state) {
      state.logged = true;
    },
  },
});

export const { fetchPollution, login } = pollutionSlice.actions;

export default pollutionSlice.reducer;
