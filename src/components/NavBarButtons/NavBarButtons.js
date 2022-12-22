import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openSearch } from "../../features/search/searchSlice";
import * as theme from "../styles/Theme.styled";
import {
  ButtonContainer,
  Button,
  ButtonText,
  OverviewContainer,
  CloseHolder,
  Cross,
  CrossImg
} from "./NavBarButtons.styles";
import cross from "../../images/metro-cross-white.svg";

const NavBarButtons = (props) => {
  const themeColor = useSelector((state) => state.theme.value);
  const search = useSelector((state) => state.search.value);
  const dispatch = useDispatch();

  const buttonBackground = themeColor
    ? theme.light.colors.buttonFill
    : theme.dark.colors.buttonFill;
  const buttonText = themeColor
    ? theme.light.colors.text
    : theme.dark.colors.text;

  return (
    <>
      <OverviewContainer>
        {search ? (
          <CloseHolder>
            <Cross onClick={() => dispatch(openSearch())}>
              <CrossImg src={cross} alt="close x" />
            </Cross>
            <h2>Close</h2>
          </CloseHolder>
        ) : (
          <h2>Overview</h2>
        )}
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
