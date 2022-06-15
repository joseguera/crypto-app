import React from "react";
import { DropDown, DropDownList, DownArrow, CurrencyButton, Symbol, CurrencySymbol, CurrencyName, CurrencyNameHolder } from "./CurrencyDropDown.styles";

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

  render() {
    const { open, currencyName } = this.state;
    return (
      <>
        <DropDown className="container" ref={this.container}>
          <div>
            <CurrencyButton onClick={this.handleDropDownClick}>
              <Symbol>
                <CurrencySymbol>{this.setCurrencySymbol(currencyName)}</CurrencySymbol>
              </Symbol>
              <CurrencyNameHolder>
                <CurrencyName>{currencyName}</CurrencyName>
                <DownArrow></DownArrow>
              </CurrencyNameHolder>
            </CurrencyButton>
            {open && (
              <DropDownList>
                <div id='USD' onClick={(e) => this.handleSelection(e.target.id)}>USD</div>
                <div id='EUR' onClick={(e) => this.handleSelection(e.target.id)}>EUR</div>
                <div id='GBP' onClick={(e) => this.handleSelection(e.target.id)}>GBP</div>
              </DropDownList>
            )}
          </div>
        </DropDown>
      </>
    );
  }
}
