import React from "react";
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

export default class SearchBar extends React.Component {
  state = {
    inputValue: "",
    cryptoList: [],
    open: false,
    isLoading: false,
    hasError: false,
  };

  getCryptoCurrencies = async () => {
    try {
      this.setState({ isLoading: true });
      const { data } = await axios(
        `https://crypto-app-server.herokuapp.com/coins/${this.state.inputValue}`
      );
      this.setState({
        cryptoList: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  handleChange = (e) => {
    const { open } = this.state;
    
    this.setState({
      inputValue: e.target.value,
      open: !open,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.inputValue;

    this.setState({ inputValue: value });
  };

  cryptoContainer = React.createRef();

  handleSearchDropDown = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleSelection = (value) => {
    const { open } = this.state;
    this.setState({
      cryptoName: value,
      open: !open,
    });
  };

  handleClickOutside = (event) => {
    if (
      this.cryptoContainer &&
      !this.cryptoContainer.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.inputValue !== prevState.inputValue) {
      this.getCryptoCurrencies();
    }
    if (this.state.cryptoList > 0) {
      this.getCryptoCurrencies();
    }
  }

  componentDidMount() {
    this.getCryptoCurrencies();
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { open, inputValue, cryptoList } = this.state;
    let list;
    if (inputValue.length < 1) {
      list = "Please type in the cryptocurrency to search...";
    } else {
      list = "Loading...";
    }
  
    return (
      <div className="container" ref={this.cryptoContainer}>
        <SearchBarStyle>
          <LoopIcon src={searchIcon} alt="light-dark theme" />
          <InputType
            placeholder="Search..."
            onChange={this.handleChange}
            onClick={this.handleSearchDropDown}
            value={inputValue}
          />
          {open && (
            <DropDownList>
              {cryptoList.length === 0 ? (
                <ListItem>
                  {(inputValue > 0 && cryptoList.length === 0) ? 
                    <NoResults key={0}>
                      Not found. Please try searching another term
                    </NoResults>
                  :
                    <span key={0}>{list}</span>
                  }
                </ListItem>
              ) : (
                cryptoList.map((cryptoItem) => {
                  return (
                    <Link to={`/coin/${cryptoItem.api_symbol}`} style={{ "width": "100%" }}>
                      <ListItem
                        id={cryptoItem.id}
                        key={cryptoItem.id}
                        onClick={(e) => this.handleSelection(e.target.id)}
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
}
