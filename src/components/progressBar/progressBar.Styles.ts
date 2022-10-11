import styled, { keyframes } from "styled-components";

type Props = {
  gameStatus: boolean;
  filled: number;
};

const slide = keyframes`
    from {
    background-position-x: 0;
  }
  to {
    background-position-x: 113px;
  }
`;

export const ProgressBarContainer = styled.div`
  background-color: ${(props) => props.theme.colors.progressBarContainer};
  height: 2rem;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.progressBarContainer};
  border-radius: 15px;
  padding: .3rem;
  `;

export const ProgressBarFilled = styled.div<Props>`
  height: 100%;
  border-radius: 15px;
  width: ${props => (props.gameStatus ? props.filled + "%" : 0) };
  background-color: ${(props) => props.theme.colors.purple};
  transition: width 1.5s;
`;
