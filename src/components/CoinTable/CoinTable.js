import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
  border-spacing: 20px;
  border-collapse: separate;
`;

const Icon = styled.img`
  width: 20px;
`;

const Symbol = styled.span`
  text-transform: uppercase;
`;

class CoinTable extends React.Component {
  state = {
    coins: null,
    isLoading: false,
    hasError: false,
    currencyName: 'US Dollar',
    currencyRate: this.props.currencyRate
  };

  roundToZero(num) {
    return +(Math.round(num + 'e+0') + 'e-0');
  }

  roundToTwo(num) {
    return +(Math.round(num + 'e+2') + 'e-2');
  }

  formatCurrency(num) {
    if (num < 1e3) return num;
    if (num >= 1e3 && num < 1e6) return +(num / 1e3).toFixed(2) + "K";
    if (num >= 1e6 && num < 1e9) return +(num / 1e6).toFixed(2) + "M";
    if (num >= 1e9 && num < 1e12) return +(num / 1e9).toFixed(2) + "B";
    if (num >= 1e12) return + (num / 1e12).toFixed(1) + "T";
  };

  getCurrency = async () => {
    try {
      this.setState({
        currencyName: this.props.currencyName,
        currencyRate: this.props.currencyRate
      })
    } catch (err) {
      console.log("Location Error:", err);
    }
  }

  getCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coins: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName && this.props.currencyRate !== prevProps.currencyRate) {
      this.getCurrency()
    }
  }

  componentDidMount() {
    this.getCoins();
  }

  render() {
    const { isLoading, coins } = this.state;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    })

    const hasCoins = !isLoading && coins;

    return (
      <div>
        <p>{this.state.currencyName}: {this.state.currencyRate}</p>
        {isLoading && <div>Loading...</div>}
        {hasCoins && (
        <>
          <Table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>1h%</th>
                <th>24h%</th>
                <th>7d%</th>
                <th>24h Volume/Market Cap</th>
                <th>Circulating/Total Supply</th>
                <th>Last 7d</th>
              </tr>
            </thead>
            <tbody>
                {coins.map((coin) => {
                  return (
                    <tr>
                      <td>{coin.market_cap_rank}</td>
                      <td>
                        <Link to={`/coinpage/${coin.name}`}>
                          <Icon src={coin.image} alt={coin.name} />
                          {coin.name} 
                          (<Symbol>{coin.symbol}</Symbol>)
                        </Link>
                      </td>
                      <td>{formatter.format(this.roundToZero(coin.current_price))}</td>
                      <td>{this.roundToTwo(coin.price_change_percentage_1h_in_currency)}%</td>
                      <td>{this.roundToTwo(coin.price_change_percentage_24h_in_currency)}%</td>
                      <td>{this.roundToTwo(coin.price_change_percentage_7d_in_currency)}%</td>
                      <td><span>{this.formatCurrency(coin.market_cap_change_24h)}</span>{' '}<span>{this.formatCurrency(coin.market_cap)}</span></td>
                      <td><span>{this.formatCurrency(coin.circulating_supply)}</span>{' '}<span>{this.formatCurrency(coin.total_supply)}</span></td>
                      {/* this is where sparkline_in_7d graph will go */}
                      <td>{this.props.graph}</td>
                    </tr>
                  )
                })}
            </tbody>
          </Table>
        </>
        )}
      </div>
    );
  }
}

export default CoinTable;
