import { configureStore } from '@reduxjs/toolkit';
import didNumberReducer from '../features/didNumber/didNumberSlice';

export const store = configureStore({
  reducer: {
    didNumber: didNumberReducer,
  },
});
