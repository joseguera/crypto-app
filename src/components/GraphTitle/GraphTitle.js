import React from "react";
import axios from "axios";
import dayjs from "dayjs";
import { formatCurrency } from "util/numberUtil";
import { ChartTitle, TitleText, TitleAmount } from "./GraphTitle.styles";

export default class GraphTitle extends React.Component {
  state = {
    marketData: null,
    currentPrice: 0,
    totalVolume: 0,
    lastUpdated: "",
    isLoading: false,
    hasError: false,
  };

  getMarketData = async () => {
    this.setState({ isLoading: true });
    const { data } = await axios(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currencyName}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
    );
    this.setState({
      marketData: data,
      currentPrice: data[0].current_price,
      totalVolume: data[0].total_volume,
      lastUpdated: data[0].last_updated,
      isLoading: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getMarketData();
    }
  }

  componentDidMount() {
    this.getMarketData();
  }

  setCurrency = (currency) => {
    if (currency === 'usd') return '$';
    if (currency === 'eur') return '€';
    if (currency === 'gbp') return '£';
  } 

  timeConverter = (t) => {
    return dayjs(t).$d.toLocaleDateString('en-us', { year: "numeric", month:"short", day:"numeric"});
  }

  render() {
    const { marketData, isLoading, currentPrice, totalVolume, lastUpdated } =
      this.state;
    const hasMarketData = !isLoading && marketData;
    const price =
      this.props.cryptoName === "BTC Volume" ||
      this.props.cryptoName === "ETH Volume"
        ? totalVolume
        : currentPrice;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasMarketData && (
          <ChartTitle>
            <TitleText>{this.props.cryptoName}</TitleText>
            <TitleAmount>{this.setCurrency(this.props.currencyName)}{formatCurrency(price, 2)}</TitleAmount>
            <TitleText>{this.timeConverter(lastUpdated)}</TitleText>
          </ChartTitle>
        )}
      </>
    );
  }
}
