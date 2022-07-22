import React from "react";
import axios from "axios";
import { TableContent, FilterArrowDown, FilterArrowUp } from "components";
import { TableGrid, TableHeader } from "./CoinTable.styles";

class CoinTable extends React.Component {
  state = {
    coins: null,
    isLoading: false,
    hasError: false,
    filterSelection : {
      marketCapRank: { id: 1, title: "#", upArrow: false },
      name: { id: 2, title: "Name", upArrow: false },
      price: { id: 3, title: "Price", upArrow: false },
      hour: { id: 4, title: "1h%", upArrow: false },
      day: { id: 5, title: "24h%", upArrow: false },
      week: { id: 6, title: "7d%", upArrow: false }
    },
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

  setFilterArrowDirection = (id) => {
    const filter = Object.values(this.state.filterSelection).map((filter) => {
      if (filter.id === id) {
        return { ...filter, upArrow: !filter.upArrow }
      } else {
        return filter
      }
    })
    this.setState({
      filterSelection: filter
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
    const { coins, isLoading, filterSelection } = this.state;
    const hasCoins = !isLoading && coins;

    return (
      <>
        {isLoading && <div>Loading...</div>}
        {hasCoins && (
          <TableGrid>
            {Object.values(filterSelection).map((filter) => {
              return filter.upArrow ? (
                <TableHeader
                  key={filter.id}
                  id={filter.id}
                  onClick={() => this.setFilterArrowDirection(filter.id)}
                >
                  {filter.title}{' '}{<FilterArrowUp />}
                </TableHeader>
              ) : (
                <TableHeader
                  key={filter.id}
                  id={filter.id}
                  onClick={() => this.setFilterArrowDirection(filter.id)}
                >
                  {filter.title}{' '}{<FilterArrowDown />}
                </TableHeader>
              );
            })}
            <div>24h Volume/Market Cap</div>
            <div>Circulating/Total Supply</div>
            <div>Last 7d</div>
            <TableContent
              coins={coins}
              currencyName={this.props.currencyName}
            />
          </TableGrid>
        )}
      </>
    );
  }
}

export default CoinTable;