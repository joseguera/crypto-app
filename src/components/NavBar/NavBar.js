import {
  NavPageButtons,
  SearchBar,
  CurrencyDropDown,
  LightDarkTheme,
} from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";

const NavBar = (props) => {
  return (
    <>
      <nav>
        <NavPageButtons />
        <SearchBar />
        <CurrencyDropDown />
        <LightDarkTheme />
      </nav>
      <CoinNavSummary />
    </>
  );
};

export default NavBar;
