import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ThemeHolder = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  cursor: pointer;
  @media only screen and ${breakpoint.device.xs} {
    display: grid;
    width: 36px;
    height: 36px;
    background: ${({ theme }) => theme.colors.lineGraphBorder};
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
    width: 50px;
    height: 50px;
    background: ${({ theme }) => theme.colors.buttonFill};
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    width: 54px;
    height: 52px;
    background: ${({ theme }) => theme.colors.buttonFill};
  }
`;

export const ThemeIcon = styled.img`
  transform: rotate(90deg);
  filter: invert(${({ theme }) => theme.colors.themeIcon}%);
  @media only screen and ${breakpoint.device.xs} {
    width: 12px;
    height: 10px
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 24px;
    height: 20px
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 24px;
    height: 20px
  }
`;
