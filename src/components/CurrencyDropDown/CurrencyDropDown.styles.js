import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const DropDown = styled.div`
  border: none;
  cursor: pointer;
  position: relative;
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
  @media only screen and ${breakpoint.device.xs} {
    width: 76px;
    height: 36px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 50px;
    width: 108px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 50px;
    width: 108px;
  }
`;

export const DropDownHolder = styled.div`
  display: flex;
  place-items: center;
  border-radius: 10px;
  @media only screen and ${breakpoint.device.xs} {
    width: 76px;
    height: 36px;
    gap: 8px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 50px;
    width: 108px;
    gap: 12px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 50px;
    width: 108px;
    gap: 12px;
  }
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
  @media only screen and ${breakpoint.device.xs} {
    gap: 4px;
  }
  @media only screen and ${breakpoint.device.sm} {
    gap: 6px;
  }
  @media only screen and ${breakpoint.device.lg} {
    gap: 6px;
  }
`;

export const Symbol = styled.div`
  color: #1AD761;
  display: grid;
  justify-items: center;
  align-content: center;
  border-radius: 50%;
  background: #191b1f;
  @media only screen and ${breakpoint.device.xs} {
    height: 22px;
    width: 22px;
    margin-left: 4px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-left: 10px;
    height: 26px;
    width: 26px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-left: 10px;
    height: 26px;
    width: 26px;
  }
`;

export const CurrencySymbol = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: #1AD761;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 14px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 14px;
    font-weight: 400;
  }
`;



export const Currency = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: ${({ theme }) => theme.colors.text};
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 14px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Selected = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
  color: #1AD761;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 14px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CurrencyName = styled.p`
  font-size: 14px;
  font-weight: bold;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 11px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 14px;
    font-weight: 400;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 14px;
    font-weight: 400;
  }
`;
