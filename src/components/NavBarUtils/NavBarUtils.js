import { SearchBar, CurrencyDropDown, LightDarkTheme } from "components";
import { UtilContainer } from "./NavBarUtils.styles";

const NavBarUtils = (props) => {
  return (
    <UtilContainer>
      <SearchBar />
      <CurrencyDropDown />
      <LightDarkTheme />
    </UtilContainer>
  );
};

export default NavBarUtils;
