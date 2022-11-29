import styled from "styled-components";

export const CryptoAssetHolder = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const AssetDetailsHolder = styled.div`
  display: grid;
  height: 100%;
`;

export const MarketPriceHolder = styled.div`
  display: grid;
`;

export const YourCoinHolder = styled.div`
  display: grid;
`;

export const SectionTitle = styled.div`
  display: flex;
  gap: 14px;
  align-items: center;
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
  align-items: center;
  justify-content: space-around;
  padding-right: 45px;
  padding-left: 45px;
  gap: 45px;
  .gain {
    color: #1AD761;
  }
  .loss {
    color: #FE1040
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

