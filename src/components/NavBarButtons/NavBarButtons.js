import React from "react";
import { useSelector } from "react-redux";
import * as theme from "../styles/Theme.styled";
import {
  ButtonContainer,
  Button,
  ButtonText,
  OverviewContainer,
} from "./NavBarButtons.styles";
import { NavLink } from "react-router-dom";

const NavBarButtons = (props) => {
  const themeColor = useSelector((state) => state.theme.value);
  const search = useSelector((state) => state.search.value);
  
  const buttonBackground =
    (themeColor)
      ? theme.light.colors.buttonFill
      : theme.dark.colors.buttonFill;
  const buttonText =
    (themeColor)
      ? theme.light.colors.text
      : theme.dark.colors.text;

  console.log(search)

  return (
    <>
      <OverviewContainer>
        {search ? <h2>Close</h2> : <h2>Overview</h2>}
      </OverviewContainer>
      <ButtonContainer>
        <NavLink
          exact
          to="/"
          style={(isActive) => ({
            background: isActive ? buttonBackground : "",
            color: isActive ? buttonText : "",
          })}
          className="nav-link"
        >
          <Button>
            <ButtonText>Coins</ButtonText>
          </Button>
        </NavLink>
        <NavLink
          to="/portfolio"
          className="nav-link"
          style={(isActive) => ({
            background: isActive ? buttonBackground : "",
            color: isActive ? buttonText : "",
          })}
        >
          <Button>
            <ButtonText>Portfolio</ButtonText>
          </Button>
        </NavLink>
      </ButtonContainer>
    </>
  );
};

export default NavBarButtons;
