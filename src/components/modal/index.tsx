import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { useEffect } from "react";
import { setStatusSlice } from "../../store/features/statusSlice";
import { resetProgressBar } from "../../store/features/progressBarSlice";
import { setCardsData } from "../../store/features/cardsSlice";
import { shuffleArray } from "../../utils/shuffleArray";
import { createBoard } from "../../utils/memorySetup";
import { ButtonStyled } from "../../assets/styles/components/buttonStyled";
import {
  ModalStyled,
  ModalContent,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "./modal.styles";
import { resetMatchedPairs } from "../../store/features/matchedPairsSlice";
import { resetClickedCard } from "../../store/features/clickedCardSlice";
import  resultTime  from "../../utils/secondsToMinutes"

export default function Modal() {
  const dispatch = useAppDispatch()
  const gameStatus = useAppSelector((state) => state.status.statusGame);
  const gameWon = useAppSelector((state) => state.status.statusWon);
  const progressTimer = useAppSelector((state) => state.progressBar.progressBar);

  // On click reset state of the store
  function handleClick() {
    if (gameWon) dispatch(setStatusSlice("won"));
    dispatch(resetProgressBar());
    dispatch(resetMatchedPairs());
    dispatch(resetClickedCard());
    dispatch(setStatusSlice());
  }

  // Initialize state of cards when gameStatus change
  useEffect(() => {
      dispatch(setCardsData(shuffleArray(createBoard())));
  }, [gameStatus]);

  return (
    <ModalStyled gameStatus={gameStatus}>
      <ModalContent>
        <ModalHeader>
          {gameWon ? "Bravo !!!" : "Bienvenue sur un jeu de memory"}
        </ModalHeader>
        <ModalBody>
          {gameWon
            ? `Vous avez fini le jeu en ${resultTime(progressTimer)}, Si vous souhaitez rejouer cliquer sur le bouton ci-dessous.`
            : "Le jeu consiste à retourner 2 cartes puis si elles sont identiques c’est gagner, l'étape est à recommencer jusqu'à ce qu'il n'y ai plus de cartes à retourner."}
        </ModalBody>
        <ModalFooter>
          <ButtonStyled onClick={handleClick}>Jouer</ButtonStyled>
        </ModalFooter>
      </ModalContent>
    </ModalStyled>
  );
}
