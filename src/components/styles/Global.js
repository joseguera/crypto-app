import * as theme from "./Theme.styled";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    margin: 0px !important;
    padding: 0px;
    max-width: 100%;
    overflow-x: hidden;
  }

  a {
    color: ${({ theme }) => theme.colors.link};
    text-decoration: none;
  }
  
  // theme buttons color
  .light {
    background-color: ${theme.light.colors.header};
  }
  .dark {
    background-color: ${theme.dark.colors.header};
  }
`