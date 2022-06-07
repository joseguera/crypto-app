import { Link } from "react-router-dom";
import { ButtonContainer, Button } from "./NavBarButtons.styles";

const NavBarButtons = (props) => {
  return (
    <ButtonContainer>
      <Link to="/">
        <Button>Coins</Button>
      </Link>
      <Link to="/portfolio">
        <Button>Portfolio</Button>
      </Link>
    </ButtonContainer>
  );
};

export default NavBarButtons;
