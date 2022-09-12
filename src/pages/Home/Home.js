import { CoinTable, Graph } from "components";
import { MainDiv, Overview } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <Graph currencyName={props.currencyName} />
      <Overview><h2>Overview</h2></Overview>
      <CoinTable currencyName={props.currencyName} />
    </MainDiv>
  );
};

export default Home;
