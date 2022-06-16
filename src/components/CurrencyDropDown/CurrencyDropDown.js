import React from "react";
import { DropDown, DropDownList, DownArrow, CurrencyButton, Symbol, CurrencySymbol, CurrencyName, CurrencyNameHolder, CurrencyItem, CurrencyOptions } from "./CurrencyDropDown.styles";

export default class CurrencyDropDown extends React.Component {
  state = {
    currencyName: "USD",
    open: false,
  };

  setCurrencyName = (value) => {
    this.setState({
      currencyName: value,
    });
    this.props.setCurrencyName(value);
  };

  container = React.createRef();

  handleDropDownClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleSelection = (value) => {
    const currencyName = value.toLowerCase();
    const { open } = this.state;
    this.setState({
      currencyName: value,
      open: !open
    });
    this.props.setCurrencyName(currencyName);
  };

  handleClickOutside = (event) => {
    if (
      this.container &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setCurrencySymbol = (currency) => {
    if (currency === 'USD') { 
      return '$'
    }
    if (currency === 'EUR') { 
      return '€' 
    }
    if (currency === 'GBP') {
      return '£' 
    }
  } 

  currencies = [
    { name: 'USD', symbol: '$' },
    { name: 'EUR', symbol: '€' },
    { name: 'GBP', symbol: '£'  },
  ];

  render() {
    const { open, currencyName } = this.state;
    return (
      <>
        <DropDown className="container" ref={this.container}>
          <div>
            <CurrencyButton onClick={this.handleDropDownClick}>
              <Symbol>
                <CurrencySymbol>{this.setCurrencySymbol(currencyName)}</CurrencySymbol>
              </Symbol>
              <CurrencyNameHolder>
                <CurrencyName>{currencyName}</CurrencyName>
                <DownArrow></DownArrow>
              </CurrencyNameHolder>
            </CurrencyButton>
            {open && (
              <DropDownList>
                <CurrencyOptions>
                  {this.currencies.map((currency) => {
                    return (
                        <CurrencyItem onClick={(e) => this.handleSelection(currency.name)}>
                          <Symbol>
                            <CurrencySymbol>{this.setCurrencySymbol(currency.name)}</CurrencySymbol>
                          </Symbol>
                          <CurrencyNameHolder>
                            <CurrencyName>{currency.name}</CurrencyName>
                          </CurrencyNameHolder>
                        </CurrencyItem>
                    )
                  })}
                </CurrencyOptions>
              </DropDownList>
            )}
          </div>
        </DropDown>
      </>
    );
  }
}
