import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const SearchBarStyle = styled.div`
  width: 406px;
  height: 53px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
`;

export const Form = styled.form`
  width: 408px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

export const InputType = styled.input`
  margin-left: 27px;
  background: none;
  border: none;
  height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
  }
`;

export const DropDownList = styled.div`
  position: absolute;
  width: 392.5px;
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
  z-index: 10;
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  padding: 8px;
  border-radius: 5px;
  &:hover {
    background: ${({ theme }) => theme.colors.menuHover};
    cursor: pointer;
  }
`;

export const SubOne = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
