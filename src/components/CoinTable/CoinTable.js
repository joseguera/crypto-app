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
  };

  getCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      this.setState({
        coins: data,
        isLoading: false
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  componentDidMount() {
    this.getCoins();
  }

  render() {
    const { isLoading, coins } = this.state;

    const hasCoins = !isLoading && coins;
    return (
      <div>
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
                      <td>{coin.current_price}</td>
                      <td>{coin.price_change_percentage_1h_in_currency}</td>
                      <td>{coin.price_change_percentage_24h_in_currency}</td>
                      <td>{coin.price_change_percentage_7d_in_currency}</td>
                      <td>{coin.market_cap_change_24h/coin.market_cap}</td>
                      <td>{coin.circulating_supply/coin.total_supply}</td>
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
