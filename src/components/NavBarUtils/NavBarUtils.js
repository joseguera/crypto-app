import styled from 'styled-components';
import { SearchBar, CurrencyDropDown, LightDarkTheme } from "components";


const UtilContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
`;

const NavBarUtils = () => {
  return (
    <UtilContainer>
      <SearchBar />
      <CurrencyDropDown />
      <LightDarkTheme />
    </UtilContainer>
  );
};

export default NavBarUtils;
