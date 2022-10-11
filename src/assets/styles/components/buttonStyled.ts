import styled from "styled-components";

export const ButtonStyled = styled.button`
  padding: 1rem 2rem;
  font-size: 2rem;
  border: none;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s ease;
  color: ${(props) => props.theme.colors.nightBlue};
  border: 0.3rem solid ${(props) => props.theme.colors.peach};
  background-image: linear-gradient(30deg, ${(props) => props.theme.colors.peach} 50%, ${(props) => props.theme.colors.nightBlue} 50%);
  background-size: 50rem;
  background-position: 0%;
  background-repeat: no-repeat;
  &:hover {
    background-position: 100%;
    color: ${(props) => props.theme.colors.peach};
  }
`