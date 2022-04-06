import axios from "axios";
import React from "react";

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
    const { market, isLoading } = this.state;
    const hasMarketData = !isLoading && market;
    console.log(this.props.currencyName)
    return (
      <div>
        {isLoading && <div>Loading...</div>}
        {hasMarketData && (
          <div>
            <div>Coins {this.state.market.data.active_cryptocurrencies}</div>
            <div>Exchange {this.state.market.data.markets}</div>
            <div>* {this.state.market.data.total_volume[this.props.currencyName]}</div>
            <div>* {this.state.market.data.market_cap_percentage.btc}</div>
            <div>* {this.state.market.data.market_cap_percentage.eth}</div>
          </div>
        )}
      </div>
    );
  }
}
