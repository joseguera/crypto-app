import styled from "styled-components";
import { SearchBar } from "components";


export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin: 0 auto;
  align-items: center;
  height: 300px;
`;

export const SearchBarMobile = styled(SearchBar)`
  display: flex;
  flex-direction: column;
  margin-left: 47px;
  margin-right: 47px;
  margin: 0 auto;
`;
