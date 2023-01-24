import styled, { keyframes } from "styled-components";
import breakpoint from "components/styles/breakpoints";

const shimmer = keyframes` 
  0% {
    background-position: -500px 0;
  }
  100% {
    background-position: 500px 0;
  }
`;

export const Wrapper = styled.div`
    background: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    @media only screen and ${breakpoint.device.xs} {
      width: 318px;
      gap: 0px;
      flex-direction: column;
      padding-bottom: 50px;
    }
    @media only screen and ${breakpoint.device.sm} {
      width: 1296px;
      gap: 24px;
      flex-direction: row;
      height: 250px;
    }
    @media only screen and ${breakpoint.device.lg} {
      width: 1296px;
      gap: 24px;
      flex-direction: row;
      height: 250px;
    }
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.shimer1} 4%, ${({ theme }) => theme.colors.shimer2} 25%, ${({ theme }) => theme.colors.shimer1} 36%);
    background-size: 1000px;
    animation: ${shimmer} 2s infinite;
`;

export const IconSkeleton = styled(InnerWrapper)`
  border-radius: 10px;
  @media only screen and ${breakpoint.device.xs} {
    height: 109px;
    width: 116px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 220px;
    width: 190px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 220px;
    width: 190px;
  }
`;

export const AssetHolderSkeleton = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const AssetSkeleton = styled(InnerWrapper)`
  height: 59px;
  @media only screen and ${breakpoint.device.xs} {
    width: 318px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1050px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1050px;
  }
`;

export const AssetGap = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    width: 318px;
    height: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1050px;
    height: 50px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1050px;
    height: 50px;
  }
`;


