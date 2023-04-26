import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  SearchBarStyle,
  LoopIcon,
  InputType,
  DropDownList,
  ListItem,
  NoResults,
  SubOne,
  SubTwo,
} from "./SearchBar.styles";
import searchIcon from "../../images/Search.svg";
import { Link } from "react-router-dom";

interface CryptoCurrency {
  id: string;
  api_symbol: string;
  thumb: string;
  name: string;
  market_cap_rank: number;
  symbol: string;
}

const SearchBar: React.FunctionComponent<Props> = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [cryptoList, setCryptoList] = useState<CryptoCurrency[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const search = useSelector((state: any) => state.search.value);

  const getCryptoCurrencies = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios(
        `https://lit-citadel-68010.herokuapp.com/coins/${inputValue}`
      );
      setCryptoList(data);
      setIsLoading(false);
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOpen(!open);
  };

  const cryptoContainer = useRef<HTMLDivElement>(null);

  const handleSearchDropDown = () => {
    setOpen(!open);
  };

  const handleSelection = (value: CryptoCurrency) => {
    setCryptoList([value]);
    setOpen(!open);
    setInputValue("")
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cryptoContainer &&
      cryptoContainer.current &&
      !cryptoContainer.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    getCryptoCurrencies();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputValue, cryptoList]);

  let list: string | JSX.Element;
  if (inputValue.length < 1) {
    list = "Please type in the cryptocurrency to search...";
  } else {
    list = "Loading...";
  }

  return (
    <div className="container" ref={cryptoContainer}>
      <SearchBarStyle search={search}>
        <LoopIcon src={searchIcon} alt="search bar" />
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
              cryptoList.map((cryptoItem: CryptoCurrency) => {
                return (
                  <Link
                    key={cryptoItem.id}
                    to={`/coin/${cryptoItem.api_symbol}`}
                    style={{ width: "100%" }}
                  >
                    <ListItem
                      id={cryptoItem.id}
                      key={cryptoItem.id}
                      onClick={() => handleSelection(cryptoItem)}
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
                </Link>
              );
            })
          )}
        </DropDownList>
      )}
    </SearchBarStyle>
  </div>
);
}

export default SearchBar;