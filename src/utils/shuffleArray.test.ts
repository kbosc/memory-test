import { test, expect } from "vitest"
import { shuffleArray } from "./shuffleArray"

test('shuffleArray(): should send a new array shuffle', () => {
    const item = [{ id: `card1`}, { id: `card2` }, { id: `card3` }, { id: `card4` }, { id: `card5` }]

    const result = shuffleArray(item)
    
    expect(result).not.toEqual(item)
})