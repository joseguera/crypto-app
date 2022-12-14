import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";


export const DownwardArrow = styled.div`
  width: 0px;
  height: 0px;
  @media only screen and ${breakpoint.device.xs} {
    margin-left: 3px;
    border-left: 3px solid transparent;
    border-right: 3px solid transparent;
    border-top: 3px solid #06d554;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #06d554;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-left: 5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #06d554;
  }
`;
