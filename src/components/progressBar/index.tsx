import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { ProgressBarContainer, ProgressBarFilled } from "./progressBar.Styles";
import { setStatusSlice } from "../../store/features/statusSlice";
import { addProgressBar, resetProgressBar } from "../../store/features/progressBarSlice";

export default function ProgressBar() {
  const dispatch = useAppDispatch();
  const gameStatus = useAppSelector((state) => state.status.statusGame);
  const progress = useAppSelector((state) => state.progressBar.progressBar);

  useEffect(() => {
    if (progress < 100 && gameStatus) {
      setTimeout(() => dispatch(addProgressBar()), 1000);
    }
    if (progress > 99 && gameStatus) {
      dispatch(setStatusSlice());
      dispatch(resetProgressBar())
    }
  }, [progress, gameStatus]);

  return (
    <ProgressBarContainer>
      <ProgressBarFilled gameStatus={gameStatus} filled={progress} />
    </ProgressBarContainer>
  );
}
