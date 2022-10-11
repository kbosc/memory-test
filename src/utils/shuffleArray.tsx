import { CardType } from "./memorySetup";

// export const shuffleArray = (arr: CardType[]): (number | CardType)[] => {
export const shuffleArray = (arr: any[]): any[] => {
    return arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  };