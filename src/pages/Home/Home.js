import { CoinTable } from 'components';
import { Graph, CryptoDropDown } from 'components';
import { MainDiv } from './Home.styles';

const Home = (props) => {
  return (
    <MainDiv>
      <CryptoDropDown getCryptoName={props.getCryptoName} />
        <Graph currencyName={props.currencyName} cryptoName={props.cryptoName} />
      <h2>Your overview</h2>
      <CoinTable currencyName={props.currencyName} />
    </MainDiv>
  );
};

export default Home;
