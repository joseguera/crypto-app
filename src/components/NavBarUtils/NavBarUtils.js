import styled from 'styled-components';
import { SearchBar, CurrencyDropDown, LightDarkTheme } from "components";


const UtilContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;
  width: 350px;
`;

const NavBarUtils = (props) => {
  return (
    <UtilContainer>
      <SearchBar />
      <CurrencyDropDown getCurrencyName={props.getCurrencyName} />
      <LightDarkTheme />
    </UtilContainer>
  );
};

export default NavBarUtils;
