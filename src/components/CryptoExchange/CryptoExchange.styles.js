import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ExchangeHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 26px;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    justify-content: center;
    gap: 13px;
    margin-bottom: 32px;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;

  }
`;

export const ExchangeCurrency = styled.div`
  display: flex;
`;

export const ExchangeIcon = styled.img`
  width: 20px;
  height: 14px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%)
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
  @media only screen and ${breakpoint.device.xs} {
    height: 52px;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

export const CurrencyLabel = styled.p`
  font-size: 17px;
  line-height: 120%;
  font-weight: 600;
`;

export const CurrencyInput = styled.div`
  height: 36px;
  width: 198px;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  display: flex;
  align-items: center;
  padding-left: 16px;
  @media only screen and ${breakpoint.device.xs} {
    width: 237px;
    height: 52px;
    background: ${({ theme }) => theme.colors.mobileFooter};
  }
  @media only screen and ${breakpoint.device.sm} {
    background: ${({ theme }) => theme.colors.background};
  }
  @media only screen and ${breakpoint.device.lg} {
    background: ${({ theme }) => theme.colors.background};
  }
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
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
  &[type='text'] {
    color: ${({ theme }) => theme.colors.text};
  }
   { 
    font-size: 16px; 
}
`;
