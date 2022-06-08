import { NavBarButtons, NavBarUtils } from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <>
      <NavDiv>
        <NavBarButtons />
        <NavBarUtils setCurrencyName={props.setCurrencyName} />
      </NavDiv>
      <CoinNavSummary currencyName={props.currencyName} />
    </>
  );
};

export default NavBar;
