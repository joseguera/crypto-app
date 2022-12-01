import styled, { keyframes } from "styled-components";

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
  width: 1102px;
  height: 678px;
  margin: 0 auto;
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
  width: 1102px;
  height: 303px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-bottom: 88px;
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
  width: 370px;
  height: 293px;
`;

export const DataThreeSkeleton = styled(InnerWrapper)`
  width: 406px;
  height: 293px;
`;

export const DataFourSkeleton = styled(InnerWrapper)`
  width: 1092px;
  height: 275px;
  margin: 0 auto;
`;
