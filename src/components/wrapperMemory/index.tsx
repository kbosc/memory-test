import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { setStatusSlice } from "../../store/features/statusSlice"
import { BoxStyled, FooterStyled, HeaderStyled, WrapperMemo } from './wrapperMemory.styles'
import { CardType } from '../../utils/memorySetup'
import ProgressBar from "../progressBar"
import MemoryCard from '../memoryCard'

export default function WrapperMemory() {
  const dispatch = useAppDispatch()
  const cardsData = useAppSelector((state) => state.cards.cards)
  const matchedPairs = useAppSelector((state) => state.matchedPairs.matchedPairs)

// Check if game is win when MatchedPairs
  useEffect(() => {
    if(matchedPairs === cardsData.length / 2 && cardsData.length) {
      dispatch(setStatusSlice("won"))
      dispatch(setStatusSlice())
    }
  }, [matchedPairs])
  
  return (
    <BoxStyled>
        <HeaderStyled>Notre Champion.ne est Adolfo avec un score de 99/100</HeaderStyled>
        <WrapperMemo>
            {cardsData.map((card: CardType) => (
                <MemoryCard key={card.id} card={card}/>
            ))}
        </WrapperMemo>
        <FooterStyled>
          <ProgressBar />
        </FooterStyled>
    </BoxStyled>
  )
}
