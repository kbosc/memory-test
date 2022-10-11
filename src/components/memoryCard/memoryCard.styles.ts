import styled, { css } from "styled-components";

type Props = {
    flipped: boolean;
};

const sharedStyles = css`
  transition: all 0.5s;
  backface-visibility: hidden;
  cursor: pointer;
  transform-style: preserve-3d;
  border-radius: 15px;
  width: 50px;
  height: 50px;
  @media ${(props) => props.theme.device.mobileM} {
    width: 70px;
    height: 70px;
  }
  @media ${(props) => props.theme.device.tablet} {
    width: 130px;
    height: 130px;
  }
  @media ${(props) => props.theme.device.desktop} {
    width: 200px;
    height: 200px;
  }
`;

export const WrapperCard = styled.div`
  position: relative;
  perspective: 1000px;
  .front.flipped {
    z-index: 1;
    transform: rotateY(180deg);
  }
`

export const FrontImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 2 : 1)};
  transform: ${props => (props.flipped ? 'rotate(0deg)' : 'rotateY(180deg)')};
  background-color: ${(props) => props.theme.colors.nightBlue};
  padding: .5rem;
`;

export const BackImg = styled.img<Props>`
  ${sharedStyles}
  z-index: ${props => (props.flipped ? 1 : 2)};
  transform: ${props => (props.flipped ? 'rotateY(180deg)' : 'rotate(360deg)')};
  position: absolute;
  top: 0px;
  left: 0px;
`;