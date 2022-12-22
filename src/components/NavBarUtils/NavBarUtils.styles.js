import styled from 'styled-components';
import breakpoint from "components/styles/breakpoints";

export const UtilContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  @media only screen and ${breakpoint.device.xs} {
    margin-right: 47px;
    gap: 15px;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-right: 47px;
    gap: 27px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-right: 0;
    gap: 27px;
  }
`;