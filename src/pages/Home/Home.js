import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <div>
      <h2>This is the Home Page</h2>
      {props.list.map((coin) => {
          return (
              <li key='{coin.id}'>
                  <Link to={`/coinpage/${coin.value}`}>{coin.value}</Link>
              </li>
          )
      })}
    </div>
  );
};

export default Home;
