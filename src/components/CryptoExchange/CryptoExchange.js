import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { formatCurrency, roundToNumber, setCurrency } from "util/numberUtil";
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

export default function CryptoExchange(props) {
  const currency = useSelector((state) => state.currency.value);
  const [inputValue, setInputValue] = useState(1);
  const [fiatValue, setFiatValue] = useState(props.currentPrice);

  const cryptoName = props.cryptoName.toUpperCase();
  const currentPrice = roundToNumber(props.currentPrice, 2);

  const handleCryptoChange = (e) => {
    const crypto = e.target.value;
    const fiat = crypto * currentPrice;
    const fiatTotal = fiat > 1000 ? formatCurrency(fiat) : fiat.toFixed(2);
    setInputValue(crypto);
    setFiatValue(fiatTotal);
  };

  const handleFiatChange = (e) => {
    const fiat = e.target.value;
    const cryptoTotal = roundToNumber(fiat / currentPrice, 6);
    setInputValue(cryptoTotal);
    setFiatValue(fiat);
  };

  return (
    <ExchangeHolder>
      <ExchangeCurrency>
        <CurrencyName>
          <CurrencyLabel>{cryptoName}</CurrencyLabel>
        </CurrencyName>
        <CurrencyInput>
          <InputField
            onChange={handleCryptoChange}
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
          <CurrencyLabel>{currency.toUpperCase()}</CurrencyLabel>
        </CurrencyName>
        <CurrencyInput>
          <CurrencySymbol>{setCurrency(currency)}</CurrencySymbol>
          <InputField
            onChange={handleFiatChange}
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
