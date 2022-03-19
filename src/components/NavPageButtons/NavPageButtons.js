import { Link } from "react-router-dom";

const NavPageButtons = (props) => {
  return (
    <>
        <span>
          <Link to="/">Coins</Link>
        </span>
        {' '}
        <span>
          <Link to="/portfolio">Portfolio</Link>
        </span>
      
    </>
  );
};

export default NavPageButtons;
