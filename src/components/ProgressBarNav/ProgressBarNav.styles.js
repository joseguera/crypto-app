import styled from "styled-components";

export const ProgressBarHolder = styled.div`
    width: 55px;
    height: 13px;
    border-radius: 50px;
    background: #2172e5;
    overflow: hidden;
    border: 0.5px solid #191b1f;
`;

export const ProgressBarLevel = styled.div`
    height: 100%;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.barFill};
`;

