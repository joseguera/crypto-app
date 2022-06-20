import React from "react";
import { ButtonContainer, Button, ButtonClicked, ButtonText, StyledLink } from "./NavBarButtons.styles";

export default class NavBarButtons extends React.Component {
  state = {
    pageTabs : {
      coins: { title: "coins", link: "/" },
      portfolio: { title: "portfolio", link: "/portfolio" },
    },
    active: "coins",
  }

  setActive = (pageTitle) => {
    const { coins, portfolio } = this.state.pageTabs;
    let styled;
    if (pageTitle === coins.title) {
      styled = coins.title;
    }
    if (pageTitle === portfolio.title) {
      styled = portfolio.title;
    } 
    this.setState({
      active: styled
    })
  };
  
  render() {
    const { pageTabs, active } = this.state;
    return (
      <ButtonContainer>
        {Object.values(pageTabs).map((page) => {
          return (
            active === page.title ? (
              <StyledLink key={page.title} to={page.link}>
                <ButtonClicked onClick={() => this.setActive(page.title)}>
                  <ButtonText>{page.title.charAt(0).toUpperCase() + page.title.slice(1)}</ButtonText>
                </ButtonClicked>
              </StyledLink>
            ) : (
              <StyledLink key={page.title} to={page.link}>
                <Button onClick={() => this.setActive(page.title)}>
                  <ButtonText>{page.title.charAt(0).toUpperCase() + page.title.slice(1)}</ButtonText>
                </Button>
              </StyledLink>
            )
        )})}
      </ButtonContainer>
    );
  }
};