import styled from "styled-components";

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
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