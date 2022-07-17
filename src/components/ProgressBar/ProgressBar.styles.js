import styled from "styled-components";

export const ProgressBarHolder = styled.span`
    display: grid;
    width: 215px;
`;

export const ProgressBarLabel = styled.span`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const LabelText = styled.p`
    font-size: 15px;
    line-height: 0;
`;

export const ProgressBarContainer = styled.div`
    width: 269px;
    height: 8px;
    border-radius: 50px;
    background: #FE8C01;
    overflow: hidden;
    border: 0.5px solid #191B1F;
`;

export const ProgressLevel = styled.div`
    width: 50%;
    height: 100%;
    border-radius: 50px;
    background: #FEE158;
`;

