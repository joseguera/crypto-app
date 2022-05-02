import React from "react";
import axios from "axios";
import styled from 'styled-components';
import { formatCurrency } from "../../util/util";
import { bitcoin, ethereum } from "../../images"

const SummaryHolder = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const Icon = styled.img`
    width: 20px;
    vertical-align: text-bottom;
`;

export default class CoinNavSummary extends React.Component {
  state = {
    market: null,
    isLoading: false,
    hasError: false
  };

  getMarketData = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(`https://api.coingecko.com/api/v3/global`);
      this.setState({
        market: data,
        isLoading: false
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
            <div><Icon src={bitcoin} alt="bitcoin-icon" /> {Math.round(market.data.market_cap_percentage.btc)}%</div>
            <div><Icon src={ethereum} alt="ethereum-icon" /> {Math.round(market.data.market_cap_percentage.eth)}%</div>
          </SummaryHolder>
        )}
      </>
    );
  }
}
