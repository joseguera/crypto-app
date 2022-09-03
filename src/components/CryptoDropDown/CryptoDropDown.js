import React from "react";
import { DropDownHolder, DropDown, CryptoTitle, Arrow, DropDownList, ListItem } from "./CryptoDropDown.styles";

export default class CryptoDropDown extends React.Component {
  state = {
    cryptoName: "Bitcoin",
    open: false,
  };

  container = React.createRef();

  handleDropDownClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  };

  handleSelection = (value) => {
    const cryptoName= value.toLowerCase();
    const { open } = this.state;
    this.setState({
      cryptoName: value,
      open: !open
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
        <div className="container" ref={this.container}>
          <DropDownHolder>
            <DropDown onClick={this.handleDropDownClick}>
              <CryptoTitle>{this.state.cryptoName}&nbsp;Overview</CryptoTitle>
              {!open ? <Arrow /> : <Arrow style={{ "transform": "rotateX(180deg)" }} />}
            </DropDown>
            {open && (
              <DropDownList>
                <ListItem id="Bitcoin" onClick={(e) => this.handleSelection(e.target.id)}>Bitcoin</ListItem>
                <ListItem id="Ethereum" onClick={(e) => this.handleSelection(e.target.id)}>Ethereum</ListItem>
              </DropDownList>
            )}
          </DropDownHolder>
        </div>
      </>
    );
  }
}
