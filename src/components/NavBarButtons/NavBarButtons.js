import React from "react";
import * as theme from "../styles/Theme.styled";
import { ButtonContainer, Button, ButtonText,OverviewContainer } from "./NavBarButtons.styles";
import { NavLink } from "react-router-dom";

const NavBarButtons = (props) => {

    const buttonBackground = (props.selectedTheme.name === "light-theme") ? theme.light.colors.buttonFill : theme.dark.colors.buttonFill;
    const buttonText = (props.selectedTheme.name === "light-theme") ? theme.light.colors.text : theme.dark.colors.text;

    return (
      <>
      <OverviewContainer><h2>Overview</h2></OverviewContainer>
      <ButtonContainer>
        <NavLink
          exact to="/"
          style={(isActive) => ({
           background : isActive ? buttonBackground : "",
           color: isActive ? buttonText : ""
          })}
          className="nav-link"
        >
          <Button>
            <ButtonText>
              Coins
            </ButtonText>
          </Button>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="nav-link"
          style={(isActive) => ({
            background : isActive ? buttonBackground : "",
            color: isActive ? buttonText : ""
          })}
        >
          <Button>
            <ButtonText>
              Portfolio
            </ButtonText>
          </Button>
        </NavLink>
      </ButtonContainer>
      </>
    );
};

export default NavBarButtons;
