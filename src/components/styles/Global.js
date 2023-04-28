import * as theme from "./Theme.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  font-family: "Poppins", sans-serif;
  font-style: normal;
}

body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0px !important;
    padding: 0px;
    max-width: 100%;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
  
  // theme buttons color
  .light {
    background-color: ${theme.light.colors.header};
  }
  .dark {
    background-color: ${theme.dark.colors.header};
  }

  button, input[type="submit"], input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }
`