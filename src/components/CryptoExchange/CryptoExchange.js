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
    fiatValue: this.props.currentPrice
  }

  currencyName = this.props.currencyName.toUpperCase();
  cryptoName = this.props.cryptoName.toUpperCase();
  currentPrice = roundToNumber(this.props.currentPrice, 2);

  handleCryptoChange = (e) => {
    const crypto = e.target.value;
    const fiat = crypto * this.currentPrice;
    const fiatTotal = (fiat > 1000) ? formatCurrency(fiat) : fiat.toFixed(2);
    this.setState({ inputValue: crypto, fiatValue: fiatTotal })
  }

  handleFiatChange = (e) => {
    const fiat = e.target.value;
    const cryptoTotal = roundToNumber(fiat / this.currentPrice, 6);
    this.setState({ inputValue: cryptoTotal, fiatValue: fiat })
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

  render() {
    const { inputValue, fiatValue } = this.state;

    return (
      <ExchangeHolder>
        <ExchangeCurrency>
          <CurrencyName>
            <CurrencyLabel>{this.cryptoName}</CurrencyLabel>
          </CurrencyName>
          <CurrencyInput>
            <InputField
              onChange={this.handleCryptoChange}
              value={inputValue}
              type="text"
              name="crypto-currency"
              autoComplete="off"
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
              onChange={this.handleFiatChange}
              value={fiatValue}
              type="text"
              name="fiat-currency"
              autoComplete="off"
            />
          </CurrencyInput>
        </ExchangeCurrency>
      </ExchangeHolder>
    );
  }
};

