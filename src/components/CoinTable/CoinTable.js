import React from "react";
import axios from "axios";
import { TableContent, FilterArrowDown, FilterArrowUp } from "components";
import { TableGrid, TableHeader } from "./CoinTable.styles";

class CoinTable extends React.Component {
  state = {
    coins: null,
    isLoading: false,
    hasError: false,
    filterSelection: {
      marketCapRank: {
        id: 1,
        title: "#",
        prop: "market_cap_rank",
        upArrow: false,
      },
      name: { id: 2, title: "Name", prop: "name", upArrow: false },
      price: { id: 3, title: "Price", prop: "current_price", upArrow: false },
      hour: {
        id: 4,
        title: "1h%",
        prop: "price_change_percentage_1h_in_currency",
        upArrow: false,
      },
      day: {
        id: 5,
        title: "24h%",
        prop: "price_change_percentage_24h_in_currency",
        upArrow: false,
      },
      week: {
        id: 6,
        title: "7d%",
        prop: "price_change_percentage_7d_in_currency",
        upArrow: false,
      },
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
    let filteredCoins = [];
    const filter = Object.values(this.state.filterSelection).map((filter) => {
      if (filter.id === id) {
        filteredCoins = this.getFilteredCoins(filter.prop, filter.upArrow);
        return { ...filter, upArrow: !filter.upArrow };
      } else {
        return { ...filter, upArrow: false };
      }
    });
    this.setState({
      coins: filteredCoins,
      filterSelection: filter,
    });
  };

  getFilteredCoins = (list, direction) => {
    return this.state.coins.sort((a, b) => {
      const first = a[list];
      const second = b[list];
      const value = direction ? first > second : second > first;
        return value ? 1 : -1;
    });
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
                  {filter.title} {<FilterArrowUp />}
                </TableHeader>
              ) : (
                <TableHeader
                  key={filter.id}
                  id={filter.id}
                  onClick={() => this.setFilterArrowDirection(filter.id)}
                >
                  {filter.title} {<FilterArrowDown />}
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
