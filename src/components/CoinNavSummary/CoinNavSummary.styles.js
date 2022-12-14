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
    height: 35px;
    gap: 7px;
    background: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    background: ${({ theme }) => theme.colors.background};
    width: 556.6px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 774.6px;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const CoinsExchange = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: inline-block;
    font-size: 11px;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: inline-block;
    font-size: inherit;
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
    font-size: 11px;

  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
    font-size: inherit;
  }
`;

export const TotalVolumeHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 11px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: inherit;
  }
`;

export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 11px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: inherit;
  }
`;

export const Icon = styled.img`
  vertical-align: text-bottom;
  @media only screen and ${breakpoint.device.xs} {
    height: 14.66px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 20px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 20px;
    width: 20px;
  }
`;
