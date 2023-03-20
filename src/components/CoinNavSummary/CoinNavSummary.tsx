import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  ProgressBarNav,
  UpArrowGreen,
  DownArrowRed,
  LoadingCoinNavSummary,
} from "components";
import {
  formatCurrency,
  roundToNumber,
  setCurrency,
} from "../../util/numberUtil";
import ethereum from "../../images/ethereum.webp";
import bitcoin from "../../images/bitcoin.webp";
import {
  SummaryHolder,
  CoinsExchange,
  TotalMarketCapHolder,
  TotalVolumeHolder,
  IconHolder,
  Icon,
  ProgressBarVol,
  VolumeDot,
} from "./CoinNavSummary.styles";

export interface CoinNavSummaryVars {
  market: Array<object>,
  isLoading: boolean
};

const CoinNavSummary: React.FunctionComponent<Props> = () => {
  const currency = useSelector((state) => state.currency.value);
  const search = useSelector((state) => state.search.value);
  const [market, setMarket] = useState<CoinNavSummaryVars | null>(null);
  const [isLoading, setIsLoading] = useState<CoinNavSummaryVars | false>(false);

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

  const hasMarketData = !isLoading && market;

  return (
    <>
      {!search && (
        <SummaryHolder>
          {hasMarketData ? (
            <>
              <CoinsExchange>
                Coins {market.data.active_cryptocurrencies}
              </CoinsExchange>
              <CoinsExchange>Exchange {market.data.markets}</CoinsExchange>
              <TotalMarketCapHolder>
                <div>&#x25CF;</div>
                <div>
                  {setCurrency(currency)}
                  {formatCurrency(market.data.total_market_cap[currency])}
                </div>
                {market.data.market_cap_change_percentage_24h_usd < 0 ? (
                  <DownArrowRed />
                ) : (
                  <UpArrowGreen />
                )}
              </TotalMarketCapHolder>
              <TotalVolumeHolder>
                <VolumeDot>&#x25CF;</VolumeDot>
                <div>
                  {setCurrency(currency)}
                  {formatCurrency(market.data.total_volume[currency])}
                </div>
                <ProgressBarVol>
                  <ProgressBarNav
                    percent={`${roundToNumber(
                      (market.data.total_volume[currency] * 100) /
                        market.data.total_market_cap[currency],
                      0
                    )}%`}
                  />
                </ProgressBarVol>
              </TotalVolumeHolder>
              <IconHolder>
                <Icon src={bitcoin} alt="bitcoin-icon" />{" "}
                {roundToNumber(market.data.market_cap_percentage.btc, 0)}%{" "}
                <ProgressBarNav
                  percent={`${market.data.market_cap_percentage.btc}%`}
                />
              </IconHolder>
              <IconHolder>
                <Icon src={ethereum} alt="ethereum-icon" />{" "}
                {roundToNumber(market.data.market_cap_percentage.eth, 0)}%{" "}
                <ProgressBarNav
                  percent={`${market.data.market_cap_percentage.eth}%`}
                />
              </IconHolder>
            </>
          ) : (
            <LoadingCoinNavSummary />
          )}
        </SummaryHolder>
      )}
    </>
  );
}

export default CoinNavSummary;
