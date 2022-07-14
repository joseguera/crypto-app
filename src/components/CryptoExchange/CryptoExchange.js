import React from "react";
import {
  ExchangeHolder,
  ExchangeCurrency,
  ExchangeIcon,
  CurrencyName,
  CurrencyLabel,
  CurrencyInput,
  InputField,
} from "./CryptoExchange.styles";
import exchangeIcon from "../../images/Icon-awesome-exchange-alt.svg";

const CryptoExchange = (props) => {
  return (
    <ExchangeHolder>
      <ExchangeCurrency>
        <CurrencyName>
          <CurrencyLabel>BTC</CurrencyLabel>
        </CurrencyName>
        <CurrencyInput>
          <InputField />
        </CurrencyInput>
      </ExchangeCurrency>
      <ExchangeIcon src={exchangeIcon} alt="arrow icon" />
      <ExchangeCurrency>
        <CurrencyName>
          <CurrencyLabel>USD</CurrencyLabel>
        </CurrencyName>
        <CurrencyInput>
          <InputField />
        </CurrencyInput>
      </ExchangeCurrency>
    </ExchangeHolder>
  );
};

export default CryptoExchange;