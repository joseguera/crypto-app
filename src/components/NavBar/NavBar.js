import { NavBarButtons, NavBarUtils } from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv, NavBarDiv, NavBarContainer } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <>
      <NavBarContainer>
        <NavBarDiv>
          <NavDiv>
            <NavBarButtons />
            <NavBarUtils />
          </NavDiv>
        </NavBarDiv>
      </NavBarContainer>
      <NavBarDiv>
        <CoinNavSummary />
      </NavBarDiv>
    </>
  );
};

export default NavBar;
