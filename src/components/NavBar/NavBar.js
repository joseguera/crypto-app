import {
  NavBarButtons,
  NavBarUtils
} from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv } from "NavBar.styles";

const NavBar = (props) => {
  return (
    <>
      <NavDiv>
        <NavBarButtons />
        <NavBarUtils getCurrencyName={props.getCurrencyName} />
      </NavDiv>
      <CoinNavSummary currencyName={props.currencyName} />
    </>
  );
};

export default NavBar;
