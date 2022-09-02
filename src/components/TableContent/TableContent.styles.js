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
    height: 89px;
    width: 100%;

`;

export const InnerWrapper = styled.div`
    border-radius: 10px;
    height: 16px;
    width: 100%;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.background} 4%, ${({ theme }) => theme.colors.text} 25%, ${({ theme }) => theme.colors.text} 36%);
    background-size: 1000px 100%;
    animation: ${shimmer} 2s infinite;
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const PercentCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const styledLink = {
  textDecoration: "none",
};

export const LinkText = styled.span`
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
`;

export const TableLine = styled.span`
  border-top: 1px solid #dcdcdc;
  grid-column: 1 / 10;
`;
