import { SearchBar } from "components";
import cross from "../../images/metro-cross.svg";
import { MainDiv, Overview, Cross, CrossImg } from "./SearchMobile.styles";

const SearchBarMobile = (props) => {
  return (
    <MainDiv>
      <Overview>
        <Cross onClick={() => props.closeModal()}>
          <CrossImg src={cross} alt="close x" />
        </Cross>
        <h2>Close</h2>
      </Overview>
      <SearchBar />
    </MainDiv>
  );
};

export default SearchBarMobile;
