import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'

type InitialState = {
    statusGame: boolean,
    statusWon: boolean,
}

const initialState: InitialState = {
    statusGame: false,
    statusWon: false,
}

export const statusSlice = createSlice({
    name: "status",
    initialState,
    reducers: {
        setStatusSlice: (state, { payload }: PayloadAction<string | undefined >) => {
            if(payload === "won") {
                state.statusWon = !state.statusWon
            } else {
                state.statusGame = !state.statusGame
            }
        }
    }
})

export const { setStatusSlice } = statusSlice.actions
export default statusSlice.reducer
export const statusGame = (state: RootState) => state.status.statusGame
export const statusWon = (state: RootState) => state.status.statusWon