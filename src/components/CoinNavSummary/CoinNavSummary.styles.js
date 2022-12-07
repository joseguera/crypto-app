import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const SummaryHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  background: ${({ theme }) => theme.colors.background};
  height: 50px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  @media only screen and ${breakpoint.device.xs} {

  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {
    width: 774.6px;
  }
`;

export const CoinsExchange = styled.div`
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

export const ProgressBarVol = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: inline-block;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;

export const VolumeDot = styled.div`
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

export const TotalMarketCapHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
`;

export const TotalVolumeHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Icon = styled.img`
  width: 20px;
  vertical-align: text-bottom;
`;
