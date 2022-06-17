import React from "react";
import { ButtonContainer, Button, ButtonClicked, ButtonText, StyledLink } from "./NavBarButtons.styles";

export default class NavBarButtons extends React.Component {
  state = {
    active: 'coins',
  }

  setActive = (e) => {
    this.setState({
      active: e
    })
  } 
  
  render() {
    const { active } = this.state;
    return (
      <ButtonContainer>
        {active === "coins" ? (
          <StyledLink to="/">
            <ButtonClicked onClick={() => this.setActive("coins")}>
              <ButtonText>Coins</ButtonText>
            </ButtonClicked>
          </StyledLink>
        ) : (
          <StyledLink to="/">
            <Button onClick={() => this.setActive("coins")}>
              <ButtonText>Coins</ButtonText>
            </Button>
          </StyledLink>
        )}
        {active === "portfolio" ? (
          <StyledLink to="/portfolio">
            <ButtonClicked onClick={() => this.setActive("portfolio")}>
              <ButtonText>Portfolio</ButtonText>
            </ButtonClicked>
          </StyledLink>
        ) : (
          <StyledLink to="/portfolio">
            <Button onClick={() => this.setActive("portfolio")}>
              <ButtonText>Portfolio</ButtonText>
            </Button>
          </StyledLink>
        )}
      </ButtonContainer>
    );
  }
};