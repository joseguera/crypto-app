import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ThemeHolder = styled.div`
  display: grid;
  place-items: center;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.buttonFill};
  cursor: pointer;
  @media only screen and ${breakpoint.device.xs} {
    display: grid;
    width: 36px;
    height: 36px;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    width: 54px;
    height: 52px;
  }
`;

export const ThemeIcon = styled.img`
  transform: rotate(90deg);
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
  @media only screen and ${breakpoint.device.xs} {
    width: 12px;
    height: 10px
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {
    width: 24px;
    height: 20px
  }
`;
