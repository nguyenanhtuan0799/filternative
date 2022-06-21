import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import type {RootState} from '../store';

// Define a type for the slice state
interface AppearanceState {
  dark: boolean;
}

// Define the initial state using that type
const initialState: AppearanceState = {
  dark: true,
};

export const AppearanceSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeMode: state => {
      state.dark = !state.dark;
    },
  },
});

export const {changeMode} = AppearanceSlice.actions;
export const selectCount = (state: RootState) => state.appearance.dark;

export default AppearanceSlice.reducer;
