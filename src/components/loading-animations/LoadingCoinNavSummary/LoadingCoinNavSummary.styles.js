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
  border-radius: 10px;
  display: flex;
  gap: 24px;
  width: 774.6px;
  height: 50px;
  align-items: center;
  justify-content: center;
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

export const DataSkeleton = styled(InnerWrapper)`
  width: 101.85px;
  height: 24px;
`;
