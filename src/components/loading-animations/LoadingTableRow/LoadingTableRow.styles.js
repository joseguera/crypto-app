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
    height: 70px;
    width: 100%;
    display: grid;
    justify-items: stretch;
    align-items: center;
    column-gap: 5px;
    row-gap: 10px;
    grid-column: 1 / 10;
    grid-template-areas:
        'main main main main main main main main main';
`;

const InnerWrapper = styled.div`
    border-radius: 10px;
    height: 16px;
    width: 100%;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.shimer1} 4%, ${({ theme }) => theme.colors.shimer2} 25%, ${({ theme }) => theme.colors.shimer1} 36%);
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;
`;

export const RankSkeleton = styled(InnerWrapper)`
  width: 44px;
`;

export const NameSkeleton = styled(InnerWrapper)`
  width: 275px;
`;

export const PriceSkeleton = styled(InnerWrapper)`
  width: 83px;
`;

export const PercentSkeleton = styled(InnerWrapper)`
  width: 215px;
`;

export const GraphSkeleton = styled(InnerWrapper)`
  width: 115px;
`;
