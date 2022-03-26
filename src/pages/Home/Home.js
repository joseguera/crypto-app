import styled from 'styled-components';
import { CoinTable } from 'components';
import { Graph } from 'components';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Home = (props) => {
  return (
    <MainDiv>
      <h2>Your overview</h2>
      <Graph />
      <Graph />
      <h2>Your overview</h2>
      <CoinTable list={props.list} graph={<Graph />}/>
    </MainDiv>
  );
};

export default Home;
