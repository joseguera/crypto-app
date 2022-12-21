import React from "react";
import { SearchBar } from "components";
import { MainDiv } from "./SearchMobile.styles";

const SearchMobile = (props) => {
  return (
    <MainDiv>
      <SearchBar style={{ display: "flex" }} />
    </MainDiv>
  );
};

export default SearchMobile;
