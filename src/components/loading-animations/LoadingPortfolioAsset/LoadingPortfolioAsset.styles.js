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
    width: 1296px;
    height: 250px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.shimer1} 4%, ${({ theme }) => theme.colors.shimer2} 25%, ${({ theme }) => theme.colors.shimer1} 36%);
    background-size: 1000px;
    animation: ${shimmer} 2s infinite;
`;

export const IconSkeleton = styled(InnerWrapper)`
  border-radius: 10px;
  height: 220px;
  width: 190px;
`;

export const AssetHolderSkeleton = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const AssetSkeleton = styled(InnerWrapper)`
  height: 59px;
  width: 1050px;
`;

export const AssetGap = styled.div`
  height: 50px;
  width: 1050px;
`;


