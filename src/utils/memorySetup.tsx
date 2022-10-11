import card1 from "../assets/images/card1.svg"
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";
import card4 from "../assets/images/card4.svg";
import card5 from "../assets/images/card5.svg";
import card6 from "../assets/images/card6.svg";
import card7 from "../assets/images/card7.svg";
import card8 from "../assets/images/card8.svg";
import cardBack from '../assets/images/cardBack.jpg';

export type CardType = {
  id: string;
  flipped: boolean;
  backImage: string;
  frontImage: string;
  clickable: boolean;
  matchingCardId: string;
};

const cardsArray: string[] = [card1, card2, card3, card4, card5, card6, card7, card8];

export const createBoard = (): CardType[] =>
  [...cardsArray, ...cardsArray].map((card, i) => ({
    id: `card${i}`,
    flipped: false,
    backImage: cardBack,
    frontImage: card,
    clickable: true,
    matchingCardId: i < cardsArray.length ? `card${i + cardsArray.length}` : `card${i - cardsArray.length}`
  }));