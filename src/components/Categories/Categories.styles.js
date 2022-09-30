import styled from "styled-components";

export const CategoryHolder = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const CategoryTitle = styled.div``;

export const CategoryButton = styled.div`
  background: ${({ theme }) => theme.colors.buttonFill};
  cursor: pointer;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const StyledButton = styled.div`
  background: #06d554;
  cursor: pointer;
  border-radius: 10px;
  padding-left: 12px;
  padding-right: 12px;
`;

export const ButtonText = styled.p`
  font-size: 15px;
  line-height: 0;
`;
