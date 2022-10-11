import React from 'react'
import handleCardClick from '../../utils/handleCardClick';
import { CardType } from '../../utils/memorySetup';
import { BackImg, FrontImg, WrapperCard } from './memoryCard.styles'
import { useAppSelector, useAppDispatch } from '../../store/hooks'

type Props = {
  card: CardType;
}

 const MemoryCard: React.FC<Props> = ({card}) => {

  const dispatch = useAppDispatch()
  const cardsData = useAppSelector((state) => state.cards.cards)
  const cardsClickedData = useAppSelector((state) => state.clickedCard.clickedCard)

  return (
    <WrapperCard onClick={() => handleCardClick(card, dispatch, cardsData, cardsClickedData )}>
      <FrontImg flipped={card.flipped} src={card.frontImage} alt="card front"/>
      <BackImg flipped={card.flipped} src={card.backImage} alt="card back"/>
    </WrapperCard>
  )
}

export default MemoryCard