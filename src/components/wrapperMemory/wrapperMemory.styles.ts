import styled from "styled-components";
import img from "../../assets/images/cardBackground.jpg"

export const BoxStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5rem;
`
export const HeaderStyled = styled.header`
    margin-top: 5rem;
    font-weight: 900;
    font-size: 2rem;
`
export const WrapperMemo = styled.main`
 display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5rem;
  padding: 3rem;
  border-radius: 5px;
  background-image: url(${img});
  background-size: cover;
  box-shadow: 5px 5px 20px;
`
export const FooterStyled = styled.footer`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`