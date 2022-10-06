import React from "react";
import { useSelector } from 'react-redux';
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
  const currency = useSelector((state) => state.currency.value);
  const { profile } = props;
  
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
        {setCurrency(currency)}({Math.abs(profit)})
      </ProfitLoss>
    ) : (
      <ProfitGain>
        {setCurrency(currency)}
        {profit}
      </ProfitGain>
    );
  };

  return (
    <MarketSummary>
      <MarketHolder>
        <MarketPrice>
          <Price>
            {setCurrency(currency)}
            {setNotation(profile.market_data.current_price[currency])}
          </Price>
          <PriceChange>
            {getPercentChange(
              profile.market_data.price_change_percentage_24h_in_currency[
                currency
              ]
            )}
          </PriceChange>
        </MarketPrice>
      </MarketHolder>
      <ProfitHolder>
        <Profit>Profit: </Profit>
        {getProfit(
          profile.market_data.price_change_percentage_24h_in_currency[
            currency
          ],
          profile.market_data.current_price[currency]
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
                {setCurrency(currency)}
                {setNotation(profile.market_data.ath[currency])}
              </Data>
            </DataGroup>
            <span>
              <Data>{setDate(profile.market_data.ath_date[currency])}</Data>
            </span>
          </DataValues>
        </DataContainer>
        <DataContainer>
          <DownArrowRed />
          <DataValues>
            <DataGroup>
              <DataLabel>All Time Low:</DataLabel>
              <Data>
                {setCurrency(currency)}
                {setNotation(profile.market_data.atl[currency])}
              </Data>
            </DataGroup>
            <span>
              <Data>{setDate(profile.market_data.atl_date[currency])}</Data>
            </span>
          </DataValues>
        </DataContainer>
      </DataHolder>
    </MarketSummary>
  );
};

export default CryptoMarketSummary;
