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

export const LabelTextStart = styled.p`
    font-size: 15px;
    line-height: 0;
    color: ${({ theme }) => theme.colors.progressBarFill};
`;

export const LabelTextEnd = styled.p`
    font-size: 15px;
    line-height: 0;
    color: ${({ theme }) => theme.colors.progressBarBackground};
`;

export const ProgressBarContainer = styled.div`
    background: ${({ theme }) => theme.colors.progressBarBackground};
    width: 100%;
    height: 8px;
    border-radius: 50px;
    overflow: hidden;
    border: 0.5px solid #191b1f;
`;

export const ProgressLevel = styled.div`
    height: 100%;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.progressBarFill};
`;