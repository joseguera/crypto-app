import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

export const Button = styled.div`
  cursor: pointer;
  padding: 8px 32px;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonText = styled.h2`
  font-size: 23px;
  font-weight: 800;
  line-height: 0px;
`;

