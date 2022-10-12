import { flippedFrontCardsData, flippedBackCardsData } from "../store/features/cardsSlice"
import { setClickedCard } from "../store/features/clickedCardSlice"
import { editMatchedPairs } from "../store/features/matchedPairsSlice"
import { CardType } from './memorySetup'

const handleCardClick = (
  currentClickedCard: CardType, 
  dispatch: any, 
  cardsData:CardType[], 
  cardsClickedData:CardType | undefined
  ) => {  
    // Flip the card
    cardsData.forEach((card) => {
      if(card.id === currentClickedCard.id) dispatch(flippedFrontCardsData([card.id, ""]))
    })
    // If this is the first card that is flipped
    // just keep it flipped
    if(!cardsClickedData) {
      dispatch(setClickedCard(currentClickedCard))
    }
    // If it's a match
    if(cardsClickedData !== undefined) {
      if(cardsClickedData.matchingCardId === currentClickedCard.id) {
        dispatch(editMatchedPairs())
        cardsData.forEach((card) => {
          if(card.id === cardsClickedData.id || card.id === currentClickedCard.id) {
            dispatch(flippedFrontCardsData([card.id, "clickable"]))
          } else {
            card
          } 
        })
        return dispatch(setClickedCard(undefined))
      }
    }
    // If it's not a matched pair, wait one second and flip them back
    if(typeof(cardsClickedData?.matchingCardId) !== 'undefined' ) {
        if(cardsClickedData?.matchingCardId !== currentClickedCard.id) {
          setTimeout(() => {
            cardsData.forEach((card) => {
              if(card.id === cardsClickedData?.id || card.id === currentClickedCard.id) {
                dispatch(flippedBackCardsData(card.id))
              } else {
                return card
              }
            })
          }, 1000)
       }
       dispatch(setClickedCard(undefined))
    }
  }

  export default handleCardClick