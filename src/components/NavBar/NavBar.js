import styled from "styled-components";
import {
  NavBarButtons,
  NavBarUtils
} from "components";
import CoinNavSummary from "./../CoinNavSummary/CoinNavSummary";

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const NavBar = (props) => {
  return (
    <>
      <NavDiv>
        <NavBarButtons />
        <NavBarUtils currencyConverter={props.currencyConverter} />
      </NavDiv>
      <CoinNavSummary />
    </>
  );
};

export default NavBar;
