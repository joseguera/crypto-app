import { NavBarButtons, NavBarUtils } from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv, NavBarDiv, NavBarCoinDiv, NavBarContainer } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <>
      <NavBarContainer>
        <NavBarDiv>
          <NavDiv>
            <NavBarButtons paths={props.paths} id={props.id} />
            <NavBarUtils />
          </NavDiv>
        </NavBarDiv>
      </NavBarContainer>
      <NavBarCoinDiv>
        <CoinNavSummary />
      </NavBarCoinDiv>
    </>
  );
};

export default NavBar;
