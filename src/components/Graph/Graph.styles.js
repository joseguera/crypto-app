import styled from "styled-components";

export const GraphGrid = styled.div`
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 45px;
    margin: 20px;
`;

export const GraphCell = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 602px;
    height: 359px;
    padding: 13px;
    position: relative;
    border-radius: 10px;
    background: white;
`;

export const DateButtonHolder = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;