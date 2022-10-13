import { test, expect } from "vitest"
import  resultTime  from "./secondsToMinutes"

test( "resultTime(): should converts a number to a string with minutes and seconds display", () => {
const time = 342
const minutes = Math.floor(time / 60);
const seconds = time - minutes * 60;

const result =  resultTime(time)

expect(result).toEqual(`${minutes}m${seconds}s`)
})