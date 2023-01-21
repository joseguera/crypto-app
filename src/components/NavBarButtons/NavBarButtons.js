import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { openCloseSearch } from "../../features/search/searchSlice";
import { NavLink } from "react-router-dom";
import * as theme from "../styles/Theme.styled";
import {
  ButtonContainer,
  Button,
  ButtonText,
  OverviewContainer,
} from "./NavBarButtons.styles";

const NavBarButtons = (props) => {
  const search = useSelector((state) => state.search.value);
  const themeColor = useSelector((state) => state.theme.value);
  const header = useSelector((state) => state.header.value);
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
        <>
          {search ? (
            <Link to="/">
              <h2
                onClick={() => {
                  dispatch(openCloseSearch(false));
                  props.setHeader(search && "home");
                }}
              >
                {props.paths[header].header}
              </h2>
            </Link>
          ) : (
            <h2>{props.paths[header].header}</h2>
          )}
        </>
      </OverviewContainer>
      <ButtonContainer>
        <NavLink
          exact
          to="/"
          style={(isActive) => ({
            background: isActive && buttonBackground,
            color: isActive && buttonText,
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
            background: isActive && buttonBackground,
            color: isActive && buttonText,
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
