import styled from "styled-components";

export const ExchangeHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
`;

export const ExchangeCurrency = styled.div`
  display: flex;
`;

export const ExchangeIcon = styled.img`
  width: 20px;
  height: 14px;
`;

export const CurrencyName = styled.div`
  height: 36px;
  width: 65px;
  background: #06d554;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const CurrencyLabel = styled.p`
  font-size: 17px;
  line-height: 120%;
  font-weight: 600;
`;

export const CurrencyInput = styled.div`
  width: 198px;
  height: 36px;
  background: #2c2f36;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
`;

export const CurrencySymbol = styled.div`
  font-size: 16px;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #ffffff;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: #ffffff;
  }
  &[type='text'] {
    color: #ffffff;
  }
   { 
    font-size: 16px; 
}
`;
