import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ProgressBarContainer = styled.div`
  height: 8px;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.progressBarBackground};
  overflow: hidden;
  border: 0.5px solid #191b1f;
  @media only screen and ${breakpoint.device.xs} {
    width: 250px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 365px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 365px;
  }
`;

export const ProgressLevel = styled.div`
  height: 100%;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.progressBarFill};
`;
