import React from "react";
import axios from "axios";
import { TableContent, FilterArrowDown, FilterArrowUp } from "components";
import { TableGrid } from "./CoinTable.styles";

class CoinTable extends React.Component {
  state = {
    coins: null,
    pointsDown: true,
    isLoading: false,
    hasError: false
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

  setFilterArrowDirection = () => {
    const click = this.state.pointsDown;
    this.setState({
      pointsDown: !click
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currencyName !== prevProps.currencyName) {
      this.getCoins();
    }
  }

  componentDidMount() {
    this.getCoins();
  }

  render() {
    const { coins, isLoading, pointsDown } = this.state;
    const hasCoins = !isLoading && coins;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasCoins && (
          <TableGrid>
            <div onClick={this.setFilterArrowDirection}>#{' '}
              {(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}
            </div>
            <div onClick={this.setFilterArrowDirection}>Name{' '}{(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}</div>
            <div onClick={this.setFilterArrowDirection}>Price{' '}{(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}</div>
            <div onClick={this.setFilterArrowDirection}>1h%{' '}{(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}</div>
            <div onClick={this.setFilterArrowDirection}>24h%{' '}{(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}</div>
            <div onClick={this.setFilterArrowDirection}>7d%{' '}{(pointsDown) ? <FilterArrowDown /> : <FilterArrowUp />}</div>
            <div>24h Volume/Market Cap</div>
            <div>Circulating/Total Supply</div>
            <div>Last 7d</div>
            <TableContent coins={coins} currencyName={this.props.currencyName}/>
            
          </TableGrid>
        )}
      </>
    );
  }
}

export default CoinTable;