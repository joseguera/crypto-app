import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const SearchBarContainer = styled.div``;

export const SearchBarStyle = styled.div`
  width: 408px;
  height: 50px;
  border-radius: 10px;
  gap: 16px;
  align-items: center;
  position: relative;
  @media only screen and ${breakpoint.device.xs} {
    ${(props) =>
      props.search
        ? `
        display: flex;
        width: 296px;`
      : 
        `display: none`};
    background: ${({ theme }) => theme.colors.mobileFooter};
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    background: ${({ theme }) => theme.colors.buttonFill};

  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
    background: ${({ theme }) => theme.colors.buttonFill};
  }
`;

export const LoopIcon = styled.img`
  margin-left: 20px;
  height: 20px;
  width: 20px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
`;

export const InputType = styled.input`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
  background: none;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  border: none;
  font-weight: bold;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const DropDownList = styled.div`
  position: absolute;
  top: 50px;
  left: 0.02px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.buttonFill};
  padding: 8px;
  border-radius: 10px;
  place-items: center;
  gap: 2px;
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  z-index: 999;
  @media only screen and ${breakpoint.device.xs} {
    width: 281.5px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 392.5px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 392.5px;
  }
`;

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.menuHover};
    cursor: pointer;
  }
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SubOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ThumbNail = styled.div`
  display: flex;
  align-self: center;
`;

export const SubTwo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NoResults = styled.span`
  color: #fe1040;
`;
