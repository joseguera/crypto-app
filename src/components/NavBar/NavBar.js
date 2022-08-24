import { NavBarButtons, NavBarUtils } from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";
import { NavDiv, NavBarDiv, NavBarContainer } from "./NavBar.styles";

const NavBar = (props) => {
  return (
    <>
    <NavBarContainer>
      <NavBarDiv>
        <NavDiv>
          <NavBarButtons selectedTheme={props.selectedTheme} />
          <NavBarUtils setCurrencyName={props.setCurrencyName} handleThemeChange={props.handleThemeChange} />
        </NavDiv>
      </NavBarDiv>
    </NavBarContainer>
    <NavBarDiv>    
      <CoinNavSummary currencyName={props.currencyName} />
    </NavBarDiv>
    
    </>

  );
};

export default NavBar;
