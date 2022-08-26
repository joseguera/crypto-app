import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
    width: 250px;
    height: 8px;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.progressBarBackground};
    overflow: hidden;
    border: 0.5px solid #191B1F;
`;

export const ProgressLevel = styled.div`
    height: 100%;
    border-radius: 50px;
    background: ${({ theme }) => theme.colors.progressBarFill};
`;