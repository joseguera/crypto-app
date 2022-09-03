import styled from "styled-components";

export const DropDown = styled.div`
  border: none;
  cursor: pointer;
  height: 50px;
  width: 108px;
  position: relative;
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
`;

export const DropDownHolder = styled.div`
  display: flex;
  height: 50px;
  width: 108px;
  place-items: center;
  gap: 12px;
  border-radius: 10px;
`;

export const DropDownList = styled.div`
  position: absolute;
  top: 50px;
  width: 108px;
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
  z-index: 10;
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  animation: 0.1s ease-in-out 0s 1 normal none running iQQUbp;
  display: grid;
`;

export const CurrencyItemHolder = styled.div`
  height: 50px;
  width: 108px;
  display: grid;
  border-radius: 10px;
`;

export const CurrencyItem = styled.div`
  display: flex;
  place-items: center;
  gap: 15px;
  border-radius: 10px;
  &:hover {
    background: ${({ theme }) => theme.colors.menuHover};
    cursor: pointer;
  }
`;

export const CurrencyOptions = styled.div`
  border-radius: 10px;
`;

export const CurrencyNameHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const Symbol = styled.div`
  color: #1AD761;
  display: grid;
  justify-items: center;
  align-content: center;
  margin-left: 10px;
  height: 26px;
  width: 26px;
  border-radius: 50%;
  background: #191b1f;
`;

export const CurrencySymbol = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: #1AD761;
`;

export const Currency = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: ${({ theme }) => theme.colors.text};
`;

export const Selected = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: #1AD761;
`;

export const CurrencyName = styled.p`
  font-size: 14px;
  font-weight: bold;
`;
