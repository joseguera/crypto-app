import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
  SearchBarStyle,
  InputType,
  DropDownList,
  ListItem,
  NoResults,
  SubOne,
  SubTwo,
} from "./PortfolioSearchBar.styles";

export default function PortfolioSearchBar(props) {
  const [inputValue, setInputValue] = useState("");
  const [cryptoList, setCryptoList] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError] = useState(false);

  const getCryptoCurrencies = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${inputValue}`
      );
      setCryptoList(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    setOpen(!open);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputValue;
    setInputValue(value);
  };

  const cryptoContainer = useRef(null);

  const handleSearchDropDown = () => {
    setOpen(!open);
  };

  const handleSelection = (id, name, symbol, thumbnail) => {
    setInputValue(name);
    setOpen(!open);
    props.handleSelection(id, name, symbol, thumbnail);
  };

  const handleClickOutside = (event) => {
    if (cryptoContainer && !cryptoContainer.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    getCryptoCurrencies();
    document.addEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, cryptoList]);

  let list;
  if (inputValue.length < 1) {
    list = "Please type in the cryptocurrency to search...";
  } else {
    list = "Loading...";
  }

  return (
    <div className="container" ref={cryptoContainer}>
      <SearchBarStyle>
        <InputType
          placeholder="Search..."
          onChange={handleChange}
          onClick={handleSearchDropDown}
          value={inputValue}
        />
        {open && (
          <DropDownList>
            {cryptoList.length === 0 ? (
              <ListItem>
                {inputValue.length > 0 && cryptoList.length === 0 ? (
                  <NoResults key={0}>
                    Not found. Please try searching another term
                  </NoResults>
                ) : (
                  <span key={0}>{list}</span>
                )}
              </ListItem>
            ) : (
              cryptoList.map((cryptoItem) => {
                return (
                  <ListItem
                    id={cryptoItem.id}
                    key={cryptoItem.id}
                    onClick={() => handleSelection(cryptoItem.id, cryptoItem.name, cryptoItem.symbol, cryptoItem.thumb)}
                  >
                    <SubOne>
                      <div>
                        <img src={cryptoItem.thumb} alt={cryptoItem.id} />
                      </div>
                      <div>{cryptoItem.name}</div>
                      <div>{cryptoItem.market_cap_rank}</div>
                    </SubOne>
                    <SubTwo>
                      <div>{cryptoItem.symbol}</div>
                    </SubTwo>
                  </ListItem>
                );
              })
            )}
          </DropDownList>
        )}
      </SearchBarStyle>
    </div>
  );
}
