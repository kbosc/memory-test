import { configureStore } from "@reduxjs/toolkit";
import cardsSlice from "./features/cardsSlice";
import clickedCardSlice from "./features/clickedCardSlice";
import matchedPairsSlice from "./features/matchedPairsSlice";
import progressBarSlice from "./features/progressBarSlice";
import statusSlice from "./features/statusSlice";

export const store = configureStore({
    reducer: {
        cards: cardsSlice,
        status: statusSlice,
        clickedCard: clickedCardSlice,
        matchedPairs: matchedPairsSlice,
        progressBar: progressBarSlice,
    },
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch