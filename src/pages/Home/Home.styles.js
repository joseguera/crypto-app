import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 90%;
  margin: 0 auto;
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
