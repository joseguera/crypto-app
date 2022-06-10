import { SearchBar, CurrencyDropDown, LightDarkTheme } from "components";
import { UtilContainer } from "./NavBarUtils.styles";

const NavBarUtils = (props) => {
  return (
    <UtilContainer>
      <SearchBar />
      <CurrencyDropDown setCurrencyName={props.setCurrencyName} />
      <LightDarkTheme />
    </UtilContainer>
  );
};

export default NavBarUtils;
