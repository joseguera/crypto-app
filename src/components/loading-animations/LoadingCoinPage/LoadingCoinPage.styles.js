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
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  height: 678px;
  margin: 0 auto;
  @media only screen and ${breakpoint.device.xs} {
    width: 300px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1102px;


  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1102px;


  }
`;

const InnerWrapper = styled.div`
  border-radius: 10px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.shimer1} 4%,
    ${({ theme }) => theme.colors.shimer2} 25%,
    ${({ theme }) => theme.colors.shimer1} 36%
  );
  background-size: 1000px;
  animation: ${shimmer} 2s infinite;
`;

export const DataHolderSkeleton = styled.div`
  border-radius: 10px;
  display: flex;
  gap: 55px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    width: 300px;
    padding-top: 15px;
    padding-bottom: 0px;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    height: 303px;
    width: 1102px;
    padding-bottom: 88px;
    padding-top: 0px;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    height: 303px;
    width: 1102px;
    padding-bottom: 88px;
    padding-top: 0px;
  }
`;

export const DataOneHolderSkeleton = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
  width: 206px;
  height: 293px;
`;

export const DataOneTopSkeleton = styled(InnerWrapper)`
  width: 206px;
  height: 226px;
`;

export const DataOneBottomSkeleton = styled(InnerWrapper)`
  width: 206px;
  height: 42px;
`;

export const DataTwoSkeleton = styled(InnerWrapper)`
  @media only screen and ${breakpoint.device.xs} {
    width: 250px;
    height: 303px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 370px;
    height: 293px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 370px;
    height: 293px;
  }
`;

export const DataThreeSkeleton = styled(InnerWrapper)`
  @media only screen and ${breakpoint.device.xs} {
    width: 250px;
    height: 303px;
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 406px;
    height: 293px;
    display: inherit;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 406px;
    height: 293px;
    display: inherit;
  }
`;

export const DataFourSkeleton = styled(InnerWrapper)`
  margin: 0 auto;
  @media only screen and ${breakpoint.device.xs} {
    width: 318px;
    height: 275px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1092px;
    height: 275px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1092px;
    height: 275px;
  }
`;
