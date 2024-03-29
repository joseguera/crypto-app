import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { openCloseSearch } from "../../features/search/searchSlice";
import { setActiveHeader } from "../../features/header/headerSlice";
import { selectActiveButton } from "../../features/footer/footerSlice";
import {
  SearchBarStyle,
  LoopIcon,
  InputType,
  DropDownList,
  ListItem,
  Button,
  NoResults,
  SubOne,
  ThumbNail,
  SubTwo,
} from "./SearchBar.styles";
import searchCoins from "../../util/searchCoins";
import searchIcon from "../../images/Search.svg";

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
  const [cryptoList, setCryptoList] = useState<CryptoCurrency[]>(searchCoins.coins);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const search = useSelector((state: any) => state.search.value);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setOpen(!open);
    coinFinder();
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

  const setHeader = (id) => {
    if (id !== "undefined") dispatch(setActiveHeader(id));
  };

  ////////////////////////////////////////////////////////
  /////////////// TESTING AREA ///////////////////////////

  const coinFinder = () => {
    const searchCats = cryptoList.filter((cat) => cat.id.includes(inputValue.toLowerCase())).sort()

    function compare( a, b ) {
      if ( a.id < b.id ){
        return -1;
      }
      if ( a.id > b.id ){
        return 1;
      }
      return 0;
    }
    
    let coins = searchCats.sort(compare);
    console.log(coins);
    setCryptoList(coins);
  }




  ////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////

  useEffect(() => {
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
            {cryptoList.length !== 0 ? (
              cryptoList.slice(0, 10).map((cryptoItem: CryptoCurrency) => {
                return (
                  <Link
                    key={cryptoItem.id}
                    to={`/coin/${cryptoItem.api_symbol}`}
                    style={{ width: "100%" }}
                  >
                    <Button
                      onClick={() => {
                        setHeader("summary");
                        dispatch(selectActiveButton("summary"));
                        dispatch(openCloseSearch(false));
                      }}
                    >
                      <ListItem
                        id={cryptoItem.id}
                        key={cryptoItem.id}
                        onClick={() => handleSelection(cryptoItem)}
                      >
                        <SubOne>
                          <ThumbNail>
                            <img src={cryptoItem.thumb} alt={cryptoItem.id} />
                          </ThumbNail>
                          <div>{cryptoItem.name}</div>
                          <div>{cryptoItem.market_cap_rank}</div>
                        </SubOne>
                        <SubTwo>
                          <div>{cryptoItem.symbol}</div>
                        </SubTwo>
                      </ListItem>
                    </Button>
                  </Link>
                );
              })
            ) : (
              <ListItem>
                {inputValue.length > 0 && cryptoList.length === 0 ? (
                  <NoResults key={0}>
                    Not found. Please try searching another term
                  </NoResults>
                ) : (
                  <span key={0}>{list}</span>
                )}
              </ListItem>

            )}
          </DropDownList>
        )}
      </SearchBarStyle>
    </div>
  );
}

export default SearchBar;