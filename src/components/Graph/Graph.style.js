import styled from "styled-components";

export const GraphGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 45px;
`;

export const GraphCell = styled.div`
    justify-self: start;
    width: 602px;
    height: 359px;
    padding: 13px;
    position: relative;
    border-radius: 10px;
    background: white;
`;