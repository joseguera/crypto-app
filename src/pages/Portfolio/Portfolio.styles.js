import styled from "styled-components";

export const MainDiv = styled.div`
  margin-top: 74px;
  position: relative;
  display: flex;
  justify-content: center;
`;

export const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: center;
`;

export const AssetBtnHolder = styled.div`
  width: 405px;
  height: 61px;
  display: grid;
  justify-self: center;
  place-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: #06d554;
`;

export const AssetBtnText = styled.div`
  font-size: 20px;
  font-weight: bold;
  line-height: 120%;
`;

export const CryptoAssetHolder = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
`;

export const CryptoTitle = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  height: 236px;
  width: 206px;
  display: grid;
  place-items: center;
`;

export const CryptoContent = styled.div`
  display: grid;
  gap: 6px;
  justify-items: center;
`;

export const CryptoIcon = styled.div`
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
  width: 83px;
  height: 83px;
  display: grid;
  place-items: center;
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
`;

export const Symbol = styled.span`
  text-transform: uppercase;
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
  background: ${({ theme }) => theme.colors.buttonFill};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 45px;
  padding-left: 45px;
  gap: 45px;
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

export const Field = styled.p`
  color: rgb(0, 255, 95);
  font-size: 15px;
`;