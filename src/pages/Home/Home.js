import { CoinTable, Graph, CryptoDropDown } from "components";
import { MainDiv } from "./Home.styles";

const Home = (props) => {
  return (
    <MainDiv>
      <CryptoDropDown setCryptoName={props.setCryptoName} />
      <Graph
        currencyName={props.currencyName}
        cryptoName={props.cryptoName}
        setDateRange={props.setDateRange}
        dateRange={props.dateRange}
      />
      <h2>Your overview</h2>
      <CoinTable currencyName={props.currencyName} />
    </MainDiv>
  );
};

export default Home;
