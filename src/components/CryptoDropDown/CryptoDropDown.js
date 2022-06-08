import React from "react";
import { Select } from "./CryptoDropDown.styles";

export default class CryptoDropDown extends React.Component {
  state = {
    cryptoName: "",
  };

  setCryptoName = (value) => {
    this.setState({
      cryptoName: value,
    });
    this.props.setCryptoName(value);
  };

  render() {
    return (
      <div>
        <Select
          onChange={(e) => this.setCryptoName(e.target.value)}
          name="crypto"
          id="crypto"
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
        </Select>
      </div>
    );
  }
}
