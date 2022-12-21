import { useSelector } from "react-redux";
import { SearchBar, CurrencyDropDown, LightDarkTheme } from "components";
import { UtilContainer } from "./NavBarUtils.styles";

const NavBarUtils = (props) => {
  const search = useSelector((state) => state.search.value);

  return (
    <UtilContainer>
      {!search && (
        <>
          <SearchBar />
          <CurrencyDropDown />
          <LightDarkTheme />
        </>
      )}
    </UtilContainer>
  );
};

export default NavBarUtils;
