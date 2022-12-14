import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin: 0 auto;
  @media only screen and ${breakpoint.device.xs} {
    
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1291px;
  }
`;

export const Overview = styled.div`
  display: block;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: inline-block;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: inline-block;
  }
`;
