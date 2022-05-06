import { Link } from "react-router-dom";
import { ButtonContainer, Button } from "./NavBarButtons.styles";

const NavBarButtons = (props) => {
  return (
    <ButtonContainer>
      <Button>
        <Link to="/">Coins</Link>
      </Button>{" "}
      <Button>
        <Link to="/portfolio">Portfolio</Link>
      </Button>
    </ButtonContainer>
  );
};

export default NavBarButtons;
