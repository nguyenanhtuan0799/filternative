import {configureStore} from '@reduxjs/toolkit';
import appearanceReducer from './reducers/appearance';
export const store = configureStore({
  reducer: {
    appearance: appearanceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
