import styled from "styled-components";

export const DateHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 331px;
  height: 43px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.buttonFill};
`;

export const DateButton = styled.div`
  cursor: pointer;
  height: 34px;
  width: 34px;
  display: grid;
  border-radius: 5px;
  place-items: center;
`;

export const StyledButton = styled.div`
  background-color: #06d554;
  cursor: pointer;
  height: 34px;
  width: 34px;
  display: grid;
  border-radius: 5px;
  place-items: center;
`;

export const ButtonText = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 0px;
`;
