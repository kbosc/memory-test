import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type InitialState = {
  matchedPairs: number,
}

const initialState: InitialState = {
  matchedPairs: 0,
}

export const matchedPairsSlice = createSlice({
  name: "matchedPairs",
  initialState,
  reducers: {
    editMatchedPairs: (state, { payload }: PayloadAction<void>) => {
        state.matchedPairs = state.matchedPairs + 1
    },
    resetMatchedPairs: (state, { payload}: PayloadAction<void>) => {
      state.matchedPairs = 0
    }
  },
});

export const { editMatchedPairs, resetMatchedPairs } = matchedPairsSlice.actions;
export default matchedPairsSlice.reducer;
export const matched = (state: RootState) => state.matchedPairs.matchedPairs
