import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const UpwardArrow = styled.div`
  width: 0px;
  height: 0px;
  border-bottom: 5px solid #06d554;
  @media only screen and ${breakpoint.device.xs} {
    margin-left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #06d554;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #06d554;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid #06d554;
`;
