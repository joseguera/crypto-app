import { CoinTable, Graph } from "components";
import { MainDiv } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <Graph currencyName={props.currencyName} />
      <h2>Your Overview</h2>
      <CoinTable currencyName={props.currencyName} />
    </MainDiv>
  );
};

export default Home;
