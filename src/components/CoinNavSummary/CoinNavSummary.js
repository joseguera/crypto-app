import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProgressBarNav, UpArrowGreen, DownArrowRed } from 'components';
import { formatCurrency, roundToNumber, setCurrency } from "../../util/numberUtil";
import ethereum from "../../images/ethereum.webp"
import bitcoin from "../../images/bitcoin.webp"
import { SummaryHolder, CoinsExchange, TotalMarketCapHolder, TotalVolumeHolder, IconHolder, Icon, ProgressBarVol, VolumeDot } from "./CoinNavSummary.styles";

export default function CoinNavSummary(props) {
  const [market, setMarket] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getMarketData = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
      setMarket(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  useEffect(() => {
    getMarketData();
  }, []);

    const { currencyName } = props;
    const hasMarketData = !isLoading && market;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasMarketData && (
          <SummaryHolder>
            <CoinsExchange>Coins {market.data.active_cryptocurrencies}</CoinsExchange>
            <CoinsExchange>Exchange {market.data.markets}</CoinsExchange>
            <TotalMarketCapHolder>
              <div>&#x25CF;</div> 
              <div>{setCurrency(props.currencyName)}{formatCurrency(market.data.total_market_cap[currencyName])}</div>
              {(market.data.market_cap_change_percentage_24h_usd < 0) ? <DownArrowRed /> : <UpArrowGreen />}
            </TotalMarketCapHolder>
            <TotalVolumeHolder>
              <VolumeDot>&#x25CF;</VolumeDot> 
              <div>{setCurrency(props.currencyName)}{formatCurrency(market.data.total_volume[currencyName])}</div>
              <ProgressBarVol>
                <ProgressBarNav />
              </ProgressBarVol>
            </TotalVolumeHolder>
            <IconHolder><Icon src={bitcoin} alt="bitcoin-icon" /> {roundToNumber(market.data.market_cap_percentage.btc, 0)}%{' '}<ProgressBarNav percent={`${market.data.market_cap_percentage.btc}%`} /></IconHolder>
            <IconHolder><Icon src={ethereum} alt="ethereum-icon" /> {roundToNumber(market.data.market_cap_percentage.eth, 0)}%{' '}<ProgressBarNav percent={`${market.data.market_cap_percentage.eth}%`} /></IconHolder>
          </SummaryHolder>
        )}
      </>
    );
}
