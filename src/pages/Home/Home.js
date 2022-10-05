import { CoinTable, Graph } from "components";
import { MainDiv, Overview } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <Graph />
      <Overview><h2>Overview</h2></Overview>
      <CoinTable />
    </MainDiv>
  );
};

export default Home;
