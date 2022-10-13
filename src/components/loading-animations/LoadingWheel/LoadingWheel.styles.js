import styled, { keyframes } from "styled-components";

const spin = keyframes` 
    0% { 
        transform: rotate(0deg); 
    }
    100% { 
        transform: rotate(360deg); 
    }
`;

export const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 1;
  width: 120px;
  height: 120px;
  margin: -76px 0 0 -76px;
  border: 16px solid ${({ theme }) => theme.colors.shimer2};
  border-radius: 50%;
  border-top: 16px solid #06d554;
  animation: ${spin} 2s linear infinite;
`;