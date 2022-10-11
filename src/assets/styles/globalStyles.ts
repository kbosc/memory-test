import { createGlobalStyle } from "styled-components";
import { ThemeType } from "../styles/theme"

export const GlobalStyles = createGlobalStyle<{theme: ThemeType}>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    font-size: 62.5%;
    /* equivalent to 10px; 1rem = 10px; 10px/16px */
  }
  body {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    color: ${(props) => props.theme.colors.nightBlue};
    background-color: ${(props) => props.theme.colors.peach};
  }
`;
