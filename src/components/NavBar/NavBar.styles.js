import styled from "styled-components";

export const NavBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
`;

export const NavBarContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.background};
`;

export const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 86px;
  width: 100%;
`;