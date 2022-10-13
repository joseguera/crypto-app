import { CoinTable, Graphs } from "components";
import { MainDiv, Overview } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <Graphs />
      <Overview><h2>Overview</h2></Overview>
      <CoinTable />
    </MainDiv>
  );
};

export default Home;
