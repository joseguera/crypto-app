import React from "react";
import { DropDown, DropDownList } from "./CryptoDropDown.styles";

export default class CryptoDropDown extends React.Component {
  state = {
    cryptoName: "Bitcoin",
    open: false,
  };

  container = React.createRef();

  setCryptoName = (value) => {
    this.setState({
      cryptoName: value,
    });
    this.props.setCryptoName(value);
  };

  handleDropDownClick = () => {
    const status = this.state.open;
    this.setState({
      open: !status,
    });
  };

  handleSelection = (value) => {
    const cryptoName= value.toLowerCase();
    const status = this.state.open;
    this.setState({
      cryptoName: value,
      open: !status
    });
    this.props.setCryptoName(cryptoName);
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

  render() {
    const { open } = this.state;
    return (
      <>
        <DropDown className="container" ref={this.container}>
          <div>
            <div onClick={this.handleDropDownClick}>
              {this.state.cryptoName} Overview
            </div>
            {open && (
              <DropDownList>
                <div id="Bitcoin" onClick={(e) => this.handleSelection(e.target.id)}>Bitcoin</div>
                <div id="Ethereum" onClick={(e) => this.handleSelection(e.target.id)}>Ethereum</div>
              </DropDownList>
            )}
          </div>
        </DropDown>
      </>
    );
  }
}
