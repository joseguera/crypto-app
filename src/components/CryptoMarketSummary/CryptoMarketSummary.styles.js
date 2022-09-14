import styled from "styled-components";

export const MarketSummary = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  height: 303px;
  width: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MarketHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 14px;
`;

export const MarketPrice = styled.div`
  display: flex;
  gap: 12px;
`;

export const PriceChange = styled.span`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const PercentDown = styled.span`
  color: #fe1040;
  line-height: 0px;
`;

export const PercentUp = styled.span`
  color: #06d554;
  line-height: 0px;
`;

export const Price = styled.p`
  font-size: 30px;
  line-height: 10%;
  font-weight: 600;
`;

export const ProfitHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Profit = styled.p`
  font-size: 18px;
  line-height: 0px;
`;

export const ProfitGain = styled.span`
  color: #06d554;
`;

export const ProfitLoss = styled.span`
  color: #fe1040;
`;

export const DataHolder = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 90%;
`;

export const DataContainer = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  gap: 10px;
  justify-content: center;
`;

export const DataValues = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DataGroup = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  width: 175px;
`;

export const DataLabel = styled.p`
  font-size: 14px;
  font-weight: bold;
  line-height: 0px;
`;

export const Data = styled.p`
  font-size: 14px;
  line-height: 0px;
  text-align: center;
`;

export const StackIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 15px;
  margin-bottom: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;
