import { CoinTable, Graphs } from "components";
import { MainDiv, Overview } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <Graphs />
      <Overview><h2>Overview</h2></Overview>
      <CoinTable 
        setHeader={props.setHeader}
        selected={props.selected}
      />
    </MainDiv>
  );
};

export default Home;
