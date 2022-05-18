import React from "react";

export default class CurrencyDropDown extends React.Component {
  state = {
    currencyName: "",
  };

  getCurrencyName = (value) => {
    this.setState({
      currencyName: value,
    });
    this.props.getCurrencyName(value);
  };

  render() {
    return (
      <div>
        <select
          onChange={(e) => this.getCurrencyName(e.target.value)}
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
