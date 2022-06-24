import React from "react";
import { ButtonContainer, Button, ButtonText } from "./NavBarButtons.styles";
import { NavLink } from "react-router-dom";
import "./NavBarButtons.css"

const NavBarButtons = () => {

    return (
      <ButtonContainer>
        <NavLink
          exact to="/"
          style={(isActive) => ({
           background : isActive ? "#2C2F36" : "",
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
            background: isActive ? "#2C2F36" : "",
          })}
        >
          <Button>
            <ButtonText>
              Portfolio
            </ButtonText>
          </Button>
        </NavLink>
      </ButtonContainer>
    );
};

export default NavBarButtons;