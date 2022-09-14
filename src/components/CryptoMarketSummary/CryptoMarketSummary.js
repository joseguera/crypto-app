import React from "react";
import { UpArrowGreen, DownArrowRed } from "components";
import {
  MarketSummary,
  MarketHolder,
  MarketPrice,
  PriceChange,
  PercentDown,
  PercentUp,
  Price,
  ProfitHolder,
  Profit,
  ProfitGain,
  ProfitLoss,
  DataHolder,
  DataContainer,
  DataValues,
  DataGroup,
  DataLabel,
  Data,
  StackIcon,
} from "./CryptoMarketSummary.styles";
import {
  roundToNumber,
  formatCurrency,
  setCurrency,
  setDate,
  setToSciNotation
} from "util/numberUtil";
import stackIcon from "../../images/layer-group.svg";

const CryptoMarketSummary = (props) => {
  const { currencyName, profile } = props;
  
  const getPercentChange = (percent) => {
    const percentChange = percent ? roundToNumber(percent, 2) : 0;
    return percentChange < 0 ? (
      <>
        <DownArrowRed />
        <PercentDown>{percentChange}%</PercentDown>
      </>
    ) : (
      <>
        <UpArrowGreen />
        <PercentUp>{percentChange}%</PercentUp>
      </>
    );
  };

  const setNotation = (price) => {
    return (price >= 1) ? price : setToSciNotation(price, 2)
  }

  const getProfit = (priceChange24, currentPrice) => {
    const profitPercent = priceChange24 ? ((priceChange24 * currentPrice) / 100).toFixed(2) : 0;
    const profit = formatCurrency(profitPercent);
    return profit < 0 ? (
      <ProfitLoss>
        {setCurrency(currencyName)}({Math.abs(profit)})
      </ProfitLoss>
    ) : (
      <ProfitGain>
        {setCurrency(currencyName)}
        {profit}
      </ProfitGain>
    );
  };

  return (
    <MarketSummary>
      <MarketHolder>
        <MarketPrice>
          <Price>
            {setCurrency(currencyName)}
            {setNotation(profile.market_data.current_price[currencyName])}
          </Price>
          <PriceChange>
            {getPercentChange(
              profile.market_data.price_change_percentage_24h_in_currency[
                currencyName
              ]
            )}
          </PriceChange>
        </MarketPrice>
      </MarketHolder>
      <ProfitHolder>
        <Profit>Profit: </Profit>
        {getProfit(
          profile.market_data.price_change_percentage_24h_in_currency[
            currencyName
          ],
          profile.market_data.current_price[currencyName]
        )}
      </ProfitHolder>
      <StackIcon src={stackIcon} alt="stack image" />
      <DataHolder>
        <DataContainer>
          <UpArrowGreen />
          <DataValues>
            <DataGroup>
              <DataLabel>All Time High:</DataLabel>
              <Data>
                {setCurrency(currencyName)}
                {setNotation(profile.market_data.ath[currencyName])}
              </Data>
            </DataGroup>
            <span>
              <Data>{setDate(profile.market_data.ath_date[currencyName])}</Data>
            </span>
          </DataValues>
        </DataContainer>
        <DataContainer>
          <DownArrowRed />
          <DataValues>
            <DataGroup>
              <DataLabel>All Time Low:</DataLabel>
              <Data>
                {setCurrency(currencyName)}
                {setNotation(profile.market_data.atl[currencyName])}
              </Data>
            </DataGroup>
            <span>
              <Data>{setDate(profile.market_data.atl_date[currencyName])}</Data>
            </span>
          </DataValues>
        </DataContainer>
      </DataHolder>
    </MarketSummary>
  );
};

export default CryptoMarketSummary;
