import { CoinTable } from 'components';
import { Graph } from 'components';

const Home = (props) => {
  return (
    <div>
      <h2>Your overview</h2>
      <Graph />
      <Graph />
      <h2>Your overview</h2>
      <CoinTable list={props.list} graph={<Graph />}/>
    </div>
  );
};

export default Home;
