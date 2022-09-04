import React from "react";
import { DownArrow, UpArrowGreen } from 'components';
import { DropDown, DropDownHolder, DropDownList, Symbol, CurrencySymbol, Currency, Selected, CurrencyNameHolder, CurrencyItemHolder, CurrencyItem, CurrencyOptions } from "./CurrencyDropDown.styles";

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
    localStorage.setItem("selected-currency", JSON.stringify(currencyName.toUpperCase()));
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
    const currentCurrency = JSON.parse(localStorage.getItem("selected-currency"));
    if (currentCurrency) {
      this.setState({ currencyName: currentCurrency });
    }
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
              <CurrencySymbol>
                {this.setCurrencySymbol(currencyName)}
              </CurrencySymbol>
            </Symbol>
            <CurrencyNameHolder>
              <Currency>{currencyName}</Currency>
              {!open ? <DownArrow /> : <UpArrowGreen />}
            </CurrencyNameHolder>
            {open && (
              <DropDownList>
                <CurrencyOptions>
                  {this.currencies.map((currency) => {
                    return (
                      <CurrencyItemHolder
                        onClick={() => this.handleSelection(currency.name)}
                        key={currency.name}
                      >
                        <CurrencyItem>
                          <Symbol>
                            <CurrencySymbol>
                              {this.setCurrencySymbol(currency.name)}
                            </CurrencySymbol>
                          </Symbol>
                          <CurrencyNameHolder>
                            {currencyName === currency.name ? <Selected>{currency.name}</Selected> : <Currency>{currency.name}</Currency>}
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
