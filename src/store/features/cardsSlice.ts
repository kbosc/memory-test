import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { CardType } from '../../utils/memorySetup';

type InitialState = {
  cards: CardType[],
}

const initialState: InitialState = {
  cards: [],
}

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    setCardsData: (state, { payload }: PayloadAction<CardType[]>) => {
      state.cards = payload;
    },
    flippedFrontCardsData: (state, { payload }: PayloadAction<string[]>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === payload[0]) {
          if (payload[1] === "clickable") {
            return {
              ...card,
              clickable: false,
            };
          } else {
            return {
              ...card,
              clickable: false,
              flipped: true,
            };
          }
        } else {
          return card;
        }
      });
    },
    flippedBackCardsData: (state, { payload }: PayloadAction<string>) => {
      state.cards = state.cards.map((card) => {
        if (card.id === payload) {
          return {
            ...card,
            clickable: true,
            flipped: false,
          };
        } else {
          return card;
        }
      });
    },
  },
});

export const { setCardsData, flippedFrontCardsData, flippedBackCardsData } =
  cardsSlice.actions;
export default cardsSlice.reducer;
export const cards = (state: RootState) => state.cards.cards
