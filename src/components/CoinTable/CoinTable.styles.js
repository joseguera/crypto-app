import styled from "styled-components";

export const TableGrid = styled.div`
    display: grid;
    justify-items: stretch;
    align-items: center;
    column-gap: 5px;
    row-gap: 10px;
    grid-template-areas:
        'main main main main main main main main main';
    padding-right: 77px;
    padding-left: 13px;
    background: #191B1F;
    border-radius: 10px;
    width: 100%;
    padding: 17px;
`;

export const TableHeader = styled.div`
   &:hover {
    cursor: pointer;
   }
`;