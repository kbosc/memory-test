import styled from "styled-components";

type Props = {
  gameStatus: boolean;
};

export const ModalStyled = styled.div<Props>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${(props) => (props.gameStatus ? 0 : 1)};
  z-index: ${(props) => (props.gameStatus ? -5 : 5)};
`;

export const ModalContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  border-radius: 5px;
  padding: 2rem;
  gap: 3rem;
  color: white;
  background-color: ${(props) => props.theme.colors.nightBlue};
`;

export const ModalHeader = styled.div`
  font-weight: 300;
  font-size: 1.2rem;
  @media ${(props) => props.theme.device.tablet} {
    font-weight: 500;
    font-size: 1.5rem;
    
  }
  @media ${(props) => props.theme.device.laptop} {
    font-weight: 700;
    font-size: 2rem;
  }
`;
export const ModalBody = styled.div`
  text-align: center;
  font-weight: 200;
  font-size: 1rem;
  @media ${(props) => props.theme.device.tablet} {
    font-weight: 400;
    font-size: 1.2rem;  
  }
  @media ${(props) => props.theme.device.laptop} {
    font-weight: 500;
    font-size: 1.5rem;
  }
`;
export const ModalFooter = styled.div``;
