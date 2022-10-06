import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';
import axios from "axios";
import {
  TableFilters,
  TableContent,
  FilterArrowDown,
  FilterArrowUp,
} from "components";
import { TableGrid, TableHeader } from "./CoinTable.styles";

export default function CoinTable(props) {
  const currency = useSelector((state) => state.currency.value);
  const [coins, setCoins] = useState(null);
  const [category, setActiveCategory] = useState({ name: "", prop: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [filterSelection, setFilterSelection] = useState({
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
  });
  const [hasError] = useState(false);

  const getCoins = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}${category.prop}&order=market_cap_desc&per_page=25&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
      );
      setCoins(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  const setFilterArrowDirection = (id) => {
    let filteredCoins = [];
    const filter = Object.values(filterSelection).map((filter) => {
      if (filter.id === id) {
        filteredCoins = getFilteredCoins(filter.prop, filter.upArrow);
        return { ...filter, upArrow: !filter.upArrow };
      } else {
        return { ...filter, upArrow: false };
      }
    });
    setCoins(filteredCoins);
    setFilterSelection(filter);
  };

  const setCategory = (category) => {
    const prop = (category === "") ? "" : `&category=${category}`
    setActiveCategory({ name: category, prop });
  };

  const getFilteredCoins = (list, direction) => {
    return coins.sort((a, b) => {
      const first = a[list];
      const second = b[list];
      const value = direction ? first > second : second > first;
      return value ? 1 : -1;
    });
  };

  useEffect(() => {
    getCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, category]);

  return (
    <>
      <TableGrid>
        <TableFilters setCategory={setCategory} category={category.name} />
        {Object.values(filterSelection).map((filter) => {
          return filter.upArrow ? (
            <TableHeader
              key={filter.id}
              id={filter.id}
              onClick={() => setFilterArrowDirection(filter.id)}
            >
              {filter.title} {<FilterArrowUp />}
            </TableHeader>
          ) : (
            <TableHeader
              key={filter.id}
              id={filter.id}
              onClick={() => setFilterArrowDirection(filter.id)}
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
          isLoading={isLoading}
        />
      </TableGrid>
    </>
  );
}
