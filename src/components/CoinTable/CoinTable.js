import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Table = styled.table`
  border-spacing: 20px;
  border-collapse: separate;
`;

class CoinTable extends React.Component {
  state = {
    coins: null,
    isLoading: false,
    hasError: false,
    id: 0,
    image: "",
    name: "",
    symbol: "",
    price: 0,
    oneHourPercent: 0,
    twentyFourHourPercent: 0,
    sevenDayPercent: 0,
    twentyHourVolMarketCap: 0,
    CircTotalSupply: 0,
    last7Days: 0,
  };

  getCoins = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      console.log(data);
      this.setState({
        coins: data,
        id: data.id,
        image: data.image,
        name: data.name,
        symbol: data.symbol,
        price: data.current_price,
        oneHourPercent: data.price_change_percentage_1h_in_currency,
        twentyFourHourPercent: data.price_change_percentage_24h_in_currency,
        sevenDayPercent: data.price_change_percentage_7d_in_currency,
        twentyHourVolMarketCap: 0,
        CircTotalSupply: 0,
        last7Days: 0,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state !== prevState) {
  //     this.getCoins();
  //   }
  // }

  componentDidMount() {
    this.getCoins();
  }

  render() {
    const { 
      coins, isLoading, id, image, name, symbol, price, oneHourPercent, twentyFourHourPercent, sevenDayPercent, twentyHourVolMarketCap,
      CircTotalSupply, last7Days
     } = this.state;
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
              <tr key={id}>
                <td>{id}</td>
                <td>
                  <Link to={`/coinpage/${name}`}>
                    <img src={image} alt={name} />
                    {name} ({symbol})
                  </Link>
                </td>
                <td>{price}</td>
                <td>{oneHourPercent}</td>
                <td>{twentyFourHourPercent}</td>
                <td>{sevenDayPercent}</td>
                <td></td>
                <td></td>
                <td>{this.props.graph}</td>
              </tr>
            </tbody>
          </Table>
        </>
        )}
      </div>
    );
  }
}

export default CoinTable;
