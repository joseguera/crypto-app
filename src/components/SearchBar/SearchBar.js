import React from "react";
import { SearchBarStyle, LoopIcon, InputType } from "./SearchBar.styles";
import searchIcon from "../../images/Search.svg"

export default class SearchBar extends React.Component {

  render() {
    return (
      <>
        <SearchBarStyle>
          <LoopIcon src={searchIcon} alt='light-dark theme' />
          <InputType placeholder="Search..." />
        </SearchBarStyle>
      </>
    );
  }
};