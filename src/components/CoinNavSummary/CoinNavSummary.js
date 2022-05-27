import React from "react";
import axios from "axios";
import { formatCurrency, roundToNumber } from "../../util/numberUtil";
import ethereum from "../../images/ethereum.webp"
import bitcoin from "../../images/bitcoin.webp"
import { SummaryHolder, Icon } from "./CoinNavSummary.styles";

export default class CoinNavSummary extends React.Component {
  state = {
    market: null,
    isLoading: false,
    hasError: false,
  };

  getMarketData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
      this.setState({
        market: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidMount() {
    this.getMarketData();
  }

  render() {
    const { currencyName } = this.props;
    const { market, isLoading } = this.state;  
    const hasMarketData = !isLoading && market;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasMarketData && (
          <SummaryHolder>
            <div>Coins {market.data.active_cryptocurrencies}</div>
            <div>Exchange {market.data.markets}</div>
            <div>&#x25CF; {formatCurrency(market.data.total_market_cap[currencyName])}</div>
            <div>&#x25CF; {formatCurrency(market.data.total_volume[currencyName])}</div>
            <div><Icon src={bitcoin} alt="bitcoin-icon" /> {roundToNumber(market.data.market_cap_percentage.btc, 0)}%</div>
            <div><Icon src={ethereum} alt="ethereum-icon" /> {roundToNumber(market.data.market_cap_percentage.eth, 0)}%</div>
          </SummaryHolder>
        )}
      </>
    );
  }
}
