import styled from "styled-components";

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;

export const PercentCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const styledLink = {
  textDecoration: "none"
}

export const LinkText = styled.span`
  text-decoration: none;
  color: #FFFFFF;
  &:link {
    text-decoration: none; 
    color: blue;
  }
  &:visited {
    text-decoration: none;
    color: green;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
    color: white;
  }
`;

export const TableLine = styled.span`
  border-top: 1px solid #707070;
  grid-column: 1 / 10;
`;