import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ProgressBarContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    justify-content: center;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

export const ProgressBarHolder = styled.span`
  display: grid;
  width: 215px;
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

export const ProgressBarLabel = styled.span`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LabelTextStart = styled.p`
  font-size: 15px;
  line-height: 0;
  color: ${({ theme }) => theme.colors.progressBarFill};
`;

export const LabelTextEnd = styled.p`
  font-size: 15px;
  line-height: 0;
  color: ${({ theme }) => theme.colors.progressBarBackground}; ;
`;
