import styled from "styled-components";
import plusIcon from "../../images/Iconly-Bulk-Plus.svg";

export const CoinPageMain = styled.div`
  display: grid;
  justify-items: center;
  gap: 22px;
`;

export const SummaryHolder = styled.div`
  margin-left: 178px;
  margin-right: 151px;
`;

export const PageTitle = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`;

export const PageText = styled.p`
  font-size: 22px;
  line-height: 0%;
`;

export const SummaryContainer = styled.div`
  display: flex;
  gap: 60px;
  place-items: center;
`;

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

export const DataSummaryHolder = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  height: 303px;
  width: 437px;
`;

export const DataSummaryContainer = styled.div`
  margin-left: 38px;
  margin-top: 23px;
`;

export const MarketDataOne = styled.div`
  margin-bottom: 19px;
`;

export const MarketDataTwo = styled.div``;

export const MarketDataThree = styled.div``;

export const Symbol = styled.span`
  text-transform: uppercase;
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

export const DescriptionHolder = styled.div`
  display: grid;
  justify-items: center;
  width: 1133px;
  margin-left: 12%;
  margin-right: 10%;
`;

export const Description = styled.div`
  justify-self: start;
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const DescriptionTitle = styled.p`
  font-size: 22px;
  line-height: 0%;
`;

export const DescriptionBody = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  display: grid;
  place-items: center;
  margin-bottom: 19px;
  margin-left: 10%;
  margin-right: 10%;
`;

export const DescriptionText = styled.div`
  display: grid;
  place-items: center;
  padding: 4px 19px 34px;
`;

export const StackIcon = styled.img`
  width: 19px;
  height: 19px;
  margin-top: 15px;
  margin-bottom: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;

export const TextHolder = styled.div`
  text-align: center;
  line-height: 150% !important;
`;

export const Text = styled.div`
  text-align: center;
  line-height: 150% !important;
`;

export const DataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 28px;
`;

export const Item = styled.div`
  display: flex;
  gap: 4px;
`;

export const ItemTitle = styled.div`
  font-weight: 600;
`;

export const PlusIcon = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 7px;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: center;
  display: grid;
  justify-items: center;
  align-content: center;
`;

export const GraphHolder = styled.div`
  display: grid;
  place-items: center;
`;

export const ConverterHolder = styled.div``;

export const GraphContainer = styled.div`
  display: grid;
  justify-items: center;
`;

export const CoinPageGraph = styled.div`
  width: 1519px;
  height: 220px;
`;
