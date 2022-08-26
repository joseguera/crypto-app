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
    color: ${({ theme }) => theme.colors.progressBarBackground};;
`;

