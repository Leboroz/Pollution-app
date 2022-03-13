import { configureStore } from '@reduxjs/toolkit';
import reducer from './pollution/reducer';

const store = configureStore({
  reducer: {
    pollution: reducer,
  },
});

export default store;
