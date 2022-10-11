import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { CardType } from '../../utils/memorySetup';

type InitialState = {
  clickedCard: undefined | CardType,
}

const initialState: InitialState = {
  clickedCard: undefined,
}

export const clickedCardSlice = createSlice({
  name: "clickedCard",
  initialState,
  reducers: {
    addClickedCard: (state, { payload }: PayloadAction<CardType | undefined>) => {
        state.clickedCard = payload
    },
    resetClickedCard: (state, { payload }: PayloadAction<void>) => {
      state.clickedCard = undefined
    },
  },
});

export const { addClickedCard, resetClickedCard } = clickedCardSlice.actions;
export default clickedCardSlice.reducer;
export const clickedCard = (state: RootState) => state.clickedCard.clickedCard
