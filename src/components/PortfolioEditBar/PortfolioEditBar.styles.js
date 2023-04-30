import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const OverviewContainer = styled.div`
  display: flex;
  width: 100%;
  margin-left: 47px;
  @media only screen and ${breakpoint.device.xs} {
    
  }
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;
