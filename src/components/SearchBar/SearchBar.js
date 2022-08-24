import { SearchBarStyle, LoopIcon, InputType } from "./SearchBar.styles";

const SearchBar = (props) => {
  return (
    <>
      <SearchBarStyle>
        <LoopIcon></LoopIcon>
        <InputType placeholder="Search..." />
      </SearchBarStyle>
    </>
  );
};

export default SearchBar;
