import styled from "styled-components";

export const DropDownHolder = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

export const DropDownTitle = styled.div`
  padding-left: 10px;
  text-size: 15px;
`;

export const DropDown = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  background: ${({ theme }) => theme.colors.buttonFill};
  cursor: pointer;
  gap: 4px;
  border-radius: 10px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const Arrow = styled.div`
  width: 0px;
  height: 0px;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-top: 4px solid ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.text};
`;

export const DropDownList = styled.div`
  position: absolute;
  top: 684px;
  right: 492.5px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.buttonFill};
  padding: 8px;
  border-radius: 10px;
  place-items: center;
  text-align: center;
  gap: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  z-index: 10;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 2px;
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.menuHover};
    cursor: pointer;
  }
`;

export const CategoryTitle = styled.div`
  padding-left: 12px;
  line-height: 0px;
`;

export const ButtonText = styled.p`
  font-size: 15px;
  line-height: 0;
`;
