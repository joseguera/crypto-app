import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

export const CryptoAssetHolder = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
  }
`;

export const AssetDetailsHolder = styled.div`
  display: grid;
  height: 100%;
`;

export const MarketPriceHolder = styled.div`
  display: grid;
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {

  }
`;

export const YourCoinHolder = styled.div`
  display: grid;
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {

  }
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  @media only screen and ${breakpoint.device.xs} {
    align-items: flex-start;
  }
  @media only screen and ${breakpoint.device.sm} {
    align-items: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    align-items: center;
  }
`;

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
`;

export const SectionContent = styled.div`
  background: ${({ theme }) => theme.colors.background};
  font-size: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  .gain {
    color: #1AD761;
  }
  .loss {
    color: #FE1040
  }
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    gap: 15px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: flex-start;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    gap: 45px;
    padding-right: 45px;
    padding-left: 45px;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    gap: 45px;
    padding-right: 45px;
    padding-left: 45px;
    align-items: center;
  }
`;

export const DataPoint = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 100%;
`;

export const Field = styled.div`
  color: rgb(0, 255, 95);
  font-size: 15px;
  .neg-field
`;

export const PercentChange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

