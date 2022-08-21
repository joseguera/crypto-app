import styled from "styled-components";

export const TableGrid = styled.div`
    display: grid;
    justify-items: stretch;
    align-items: center;
    column-gap: 5px;
    row-gap: 10px;
    grid-template-areas:
        'main main main main main main main main main';
    background: #191B1F;
    border-radius: 10px;
    width: 1256px;
    padding: 17px;
`;

export const TableHeader = styled.div`
   &:hover {
    cursor: pointer;
   }
`;