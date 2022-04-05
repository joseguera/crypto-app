import React from "react";

export default class CurrencyDropDown extends React.Component {
  state = {
    currencies: null,
    isLoading: false,
    hasError: false,
    currencyName: "",
  };

  getCurrencyChange = (value) => {
    this.setState({
      currencyName: value,
    });
    this.props.currencyConverter(value);
  };

  render() {
    return (
      <div>
        <select
          onChange={(e) => this.getCurrencyChange(e.target.value)}
          name="currency"
          id="currency"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>
    );
  }
}
