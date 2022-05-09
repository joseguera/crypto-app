import styled from "styled-components";

export const TableGrid = styled.div`
    display: grid;
    justify-items: stretch;
    column-gap: 5px;
    row-gap: 10px;
    grid-template-areas:
        'main main main main main main main main main';
`;

export const Icon = styled.img`
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
`;

export const Symbol = styled.span`
  text-transform: uppercase;
`;
