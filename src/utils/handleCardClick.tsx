import { flippedFrontCardsData, flippedBackCardsData } from "../store/features/cardsSlice"
import { addClickedCard } from "../store/features/clickedCardSlice"
import { editMatchedPairs } from "../store/features/matchedPairsSlice"
import { CardType } from './memorySetup'


const handleCardClick = (currentClickedCard: CardType, dispatch: any, cardsData:CardType[], cardsClickedData:CardType | undefined) => {  
    // Flip the card
    cardsData.map((card: CardType) => {
      if(card.id === currentClickedCard.id) {
        dispatch(flippedFrontCardsData([card.id, ""]))
      } else {
        card
      } 
    })
    // If this is the first card that is flipped
    // just keep it flipped
    if(!cardsClickedData) {
      dispatch(addClickedCard(currentClickedCard))
    }
    // If it's a match
    if(cardsClickedData !== undefined) {
      if(cardsClickedData.matchingCardId === currentClickedCard.id) {
        dispatch(editMatchedPairs())
        cardsData.map((card: CardType) => {
          if(card.id === cardsClickedData.id || card.id === currentClickedCard.id) {
            dispatch(flippedFrontCardsData([card.id, "clickable"]))
          } else {
            card
          } 
        })
        return dispatch(addClickedCard(undefined))
      }
    }
    // If it's not a matched pair, wait one second and flip them back
    // if(typeof(cardsClickedData?.matchingCardId) !== 'undefined' ) {
      if(cardsClickedData.matchingCardId !== currentClickedCard.id) {
        setTimeout(() => {
          cardsData.map((card: CardType) => {
            if(card.id === cardsClickedData.id || card.id === currentClickedCard.id) {
              dispatch(flippedBackCardsData(card.id))
            } else {
              return card
            }
          })
        }, 1000)
     }
    // }
    dispatch(addClickedCard(undefined))
  }

  export default handleCardClick