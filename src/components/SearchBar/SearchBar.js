import React from "react";
import axios from "axios";
import {
  SearchBarStyle,
  LoopIcon,
  InputType,
  DropDownList,
  ListItem,
  NoResults
} from "./SearchBar.styles";
import searchIcon from "../../images/Search.svg";

export default class SearchBar extends React.Component {
  state = {
    inputValue: "",
    cryptoList: [
      { id: 0, name: "Please type in the cryptocurrency to search..." },
    ],
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
      console.log(data);
      this.setState({
        cryptoList: data,
        isLoading: false,
      });
    } catch (err) {
      console.log("Location Error:", err);
    }
  };

  handleChange = (e) => {
    const { open, cryptoList } = this.state;
    let list;
    if (e.target.value.length < 1) {
      list = "Please type in the cryptocurrency to search...";
    } else if (cryptoList.length < 0) {
      list = "Not found. Please try searching another term";
    } else {
      list = "Loading...";
    }
    this.setState({
      inputValue: e.target.value,
      open: !open,
      cryptoList: [{ id: 0, name: list }],
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const value = this.state.inputValue;

    this.setState({ inputValue: value });
    // this.props.handleSubmit(value);
  };

  cryptoContainer = React.createRef();

  handleSearchDropDown = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleSelection = (value) => {
    const cryptoName = value.toLowerCase();
    const { open } = this.state;
    this.setState({
      cryptoName: value,
      open: !open,
    });
    // this.props.setCryptoName(cryptoName);
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
                <ListItem onClick={(e) => this.handleSelection(e.target.id)}>
                  <NoResults>
                    Not found. Please try another search term
                  </NoResults>
                </ListItem>
              ) : (
                cryptoList.map((cryptoItem) => {
                  return (
                    <ListItem
                      id={cryptoItem.id}
                      key={cryptoItem.id}
                      onClick={(e) => this.handleSelection(e.target.id)}
                    >
                      {cryptoItem.name}
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
}
