import { NavBarButtons, NavBarUtils } from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv, NavBarDiv } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <NavBarDiv>
      <NavDiv>
        <NavBarButtons />
        <NavBarUtils setCurrencyName={props.setCurrencyName} />
      </NavDiv>
      <CoinNavSummary currencyName={props.currencyName} />
    </NavBarDiv>
  );
};

export default NavBar;
