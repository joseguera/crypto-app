import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

export const CryptoTitle = styled.div`
  border-radius: 10px;
  display: grid;
  place-items: center;
  @media only screen and ${breakpoint.device.xs} {
    padding: 20px 0 20px 0;
    background: ${({ theme }) => theme.colors.mobileFooter};
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 236px;
    width: 206px;
    background: ${({ theme }) => theme.colors.background};
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 236px;
    width: 206px;
    background: ${({ theme }) => theme.colors.background};
  }
`;

export const CryptoContent = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;

export const CryptoIcon = styled.div`
  border-radius: 10px;
  display: grid;
  place-items: center;
  @media only screen and ${breakpoint.device.xs} {
    width: 78px;
    height: 78px;
    background: ${({ theme }) => theme.colors.background};
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 83px;
    height: 83px;
    background: ${({ theme }) => theme.colors.buttonFill};
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 83px;
    height: 83px;
    background: ${({ theme }) => theme.colors.buttonFill};
  }
`;

export const CryptoImg = styled.img`
  height: 35px;
  width: 35px;
`;

export const CryptoName = styled.span`
  width: 150px;
  text-align: center;
  overflow-wrap: break-word;
  overflow: hidden;
`;

export const CryptoText = styled.p`
  font-size: 20px;
  line-height: 100%;
  margin-bottom: 0px;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 16px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 20px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 20px;
  }
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;
