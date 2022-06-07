import React from "react";
import { Select } from "./CurrencyDropDown.styles";

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
        <Select
          onChange={(e) => this.getCurrencyName(e.target.value)}
          name="currency"
          id="currency"
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </Select>
      </div>
    );
  }
}
