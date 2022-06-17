import { Link } from "react-router-dom";
import { ButtonContainer, Button, ButtonText, styledLink } from "./NavBarButtons.styles";

const NavBarButtons = (props) => {
  return (
    <ButtonContainer>
      <Link to="/" style={styledLink}>
        <Button><ButtonText>Coins</ButtonText></Button>
      </Link>
      <Link to="/portfolio" style={styledLink}>
        <Button><ButtonText>Portfolio</ButtonText></Button>
      </Link>
    </ButtonContainer>
  );
};

export default NavBarButtons;
