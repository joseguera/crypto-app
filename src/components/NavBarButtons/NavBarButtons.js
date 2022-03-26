import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
`;

const Button = styled.button`
  width: 70px;
`;

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
