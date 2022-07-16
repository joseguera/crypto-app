import React from "react";
import { formatCurrency, roundToNumber } from "util/numberUtil";
import {
  ExchangeHolder,
  ExchangeCurrency,
  ExchangeIcon,
  CurrencyName,
  CurrencyLabel,
  CurrencyInput,
  CurrencySymbol,
  InputField,
} from "./CryptoExchange.styles";
import exchangeIcon from "../../images/Icon-awesome-exchange-alt.svg";

export default class CryptoExchange extends React.Component {
  state = {
    inputValue: 1,
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  currencyName = this.props.currencyName.toUpperCase();
  cryptoName = this.props.cryptoName.toUpperCase();
  currentPrice = this.props.currentPrice;

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

  getExchange = (price) => {
    const rate = this.state.inputValue;
    const currencyRate = price * rate
    
    return (currencyRate > 1000) ? formatCurrency(currencyRate) : roundToNumber(currencyRate, 2);
  }

  render() {
    const { inputValue } = this.state;

    return (
      <ExchangeHolder>
        <ExchangeCurrency>
          <CurrencyName>
            <CurrencyLabel>{this.cryptoName}</CurrencyLabel>
          </CurrencyName>
          <CurrencyInput>
            <InputField
              onChange={this.handleChange}
              value={inputValue}
              type="text"
              name="crypto-currency"
            />
          </CurrencyInput>
        </ExchangeCurrency>
        <ExchangeIcon src={exchangeIcon} alt="arrow icon" />
        <ExchangeCurrency>
          <CurrencyName>
            <CurrencyLabel>{this.currencyName}</CurrencyLabel>
          </CurrencyName>
          <CurrencyInput>
            <CurrencySymbol>{this.setCurrencySymbol(this.currencyName)}</CurrencySymbol>
            <InputField 
              onChange={this.handleChange}
              value={this.getExchange(this.currentPrice)}
              type="text"
              name="fiat-currency"
            />
          </CurrencyInput>
        </ExchangeCurrency>
      </ExchangeHolder>
    );
  }
};

