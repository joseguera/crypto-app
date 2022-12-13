import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  @media only screen and ${breakpoint.device.xs} {
    background-color: ${({ theme }) => theme.colors.appBackground};
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 90%;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1291px;
  }
`;

export const NavBarCoinDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  @media only screen and ${breakpoint.device.xs} {
    background-color: ${({ theme }) => theme.colors.lineGraphBorder};
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 90%;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1291px;
  }
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 75px;
  margin: 0 auto;
  @media only screen and ${breakpoint.device.xs} {
    background: ${({ theme }) => theme.colors.appBackground};
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  gap: 5px;
  align-items: center;
  height: 75px;
  width: 100%;
`;