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
  // background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 117.46px;
  height: 88.8px;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
`;

const InnerWrapper = styled.div`
  border-radius: 5px;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.shimer1} 4%,
    ${({ theme }) => theme.colors.shimer2} 25%,
    ${({ theme }) => theme.colors.shimer1} 36%
  );
  background-size: 1000px;
  animation: ${shimmer} 2s infinite;
`;

export const TopDataSkeleton = styled(InnerWrapper)`
  width: 42.99px;
  height: 20px;
`;

export const MiddleDataSkeleton = styled(InnerWrapper)`
  width: 100.99px;
  height: 30px;
`;

export const BottomDataSkeleton = styled(InnerWrapper)`
  width: 115.99px;
  height: 20px;
`;
