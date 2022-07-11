import React from "react";
import { DownArrow } from 'components';
import { DropDown, DropDownHolder, DropDownList, Symbol, Currency, CurrencyName, CurrencyNameHolder, CurrencyItemHolder, CurrencyItem, CurrencyOptions } from "./CurrencyDropDown.styles";

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
          <DropDownHolder onClick={this.handleDropDownClick}>
            <Symbol>
              <Currency>
                {this.setCurrencySymbol(currencyName)}
              </Currency>
            </Symbol>
            <CurrencyNameHolder>
              <Currency>{currencyName}</Currency>
              <DownArrow />
            </CurrencyNameHolder>
            {open && (
              <DropDownList>
                <CurrencyOptions>
                  {this.currencies.map((currency) => {
                    return (
                      <CurrencyItemHolder
                        onClick={() => this.handleSelection(currency.name)}
                      >
                        <CurrencyItem>
                          <Symbol>
                            <Currency>
                              {this.setCurrencySymbol(currency.name)}
                            </Currency>
                          </Symbol>
                          <CurrencyNameHolder>
                            <Currency>{currency.name}</Currency>
                          </CurrencyNameHolder>
                        </CurrencyItem>
                      </CurrencyItemHolder>
                    );
                  })}
                </CurrencyOptions>
              </DropDownList>
            )}
          </DropDownHolder>
        </DropDown>
      </>
    );
  }
}
