import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const NextArrow = styled.div`
  width: 0px;
  height: 0px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent ${({ theme }) => theme.colors.sideArrow} transparent transparent;
  display: none;
  @media only screen and ${breakpoint.device.xs} {
    display: inline-block;
    cursor: pointer;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;
