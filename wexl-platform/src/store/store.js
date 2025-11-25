import { configureStore } from '@reduxjs/toolkit';
import leadsReducer from '../features/leads/leadsSlice';

export const store = configureStore({
  reducer: {
    leads: leadsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
