import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { roundToNumber, formatCurrency } from "../../util/util";
import { TableGrid, Icon, Symbol } from "./CoinTable.styles";

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
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currencyName}&order=market_cap_desc&per_page=50&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
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
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getCoins();
    }
  }

  componentDidMount() {
    this.getCoins();
  }

  render() {
    const { coins, isLoading } = this.state;
    const hasCoins = !isLoading && coins;

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: this.props.currencyName,
      minimumFractionDigits: 0,
    });

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasCoins && (
          <TableGrid>
            <div>#</div>
            <div>Name</div>
            <div>Price</div>
            <div>1h%</div>
            <div>24h%</div>
            <div>7d%</div>
            <div>24h Volume/Market Cap</div>
            <div>Circulating/Total Supply</div>
            <div>7d</div>
            {coins.map((coin) => {
              return (
                <>
                  <div>{coin.market_cap_rank}</div>
                  <div>
                    <Link to={`/coinpage/${coin.name}`}>
                      <Icon src={coin.image} alt={coin.name} />
                      {coin.name}(<Symbol>{coin.symbol}</Symbol>)
                    </Link>
                  </div>
                  <div>{formatter.format(coin.current_price)}</div>
                  <div>
                    {roundToNumber(
                      coin.price_change_percentage_1h_in_currency,
                      2
                    )}
                    %
                  </div>
                  <div>
                    {roundToNumber(
                      coin.price_change_percentage_24h_in_currency,
                      2
                    )}
                    %
                  </div>
                  <div>
                    {roundToNumber(
                      coin.price_change_percentage_7d_in_currency,
                      2
                    )}
                    %
                  </div>
                  <div>
                    <span>{formatCurrency(coin.total_volume)}</span>{" "}
                    <span>{formatCurrency(coin.market_cap)}</span>
                  </div>
                  <div>
                    <span>{formatCurrency(coin.circulating_supply)}</span>{" "}
                    <span>{formatCurrency(coin.total_supply)}</span>
                  </div>
                  {/* this is where sparkline_in_7d graph will go */}
                  <div>Graph</div>
                </>
                );
              })}
          </TableGrid>
        )}
      </>
    );
  }
}

export default CoinTable;
