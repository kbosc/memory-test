import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type InitialState = {
  progressBar: number,
}

const initialState: InitialState = {
  progressBar: 0,
}

export const progressBarSlice = createSlice({
  name: "progressBar",
  initialState,
  reducers: {
    addProgressBar: (state, { payload }: PayloadAction<void>) => {
        state.progressBar = state.progressBar + 1
    },
    resetProgressBar: (state, { payload}: PayloadAction<void> ) => {
      state.progressBar = 0
    }
  },
});

export const { addProgressBar, resetProgressBar } = progressBarSlice.actions;
export default progressBarSlice.reducer;
export const progress = (state: RootState) => state.progressBar.progressBar