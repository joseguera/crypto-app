import styled from 'styled-components';
import { CoinTable, Chart } from 'components';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = (props) => {
  return (
    <MainDiv>
      <h2>Your overview</h2>
      <Chart />
      <h2>Your overview</h2>
      <Chart />
      <CoinTable currencyName={props.currencyName} chart={<Chart />}/>
    </MainDiv>
  );
};

export default Home;
