import styled from "styled-components";

export const ThemeHolder = styled.div`
    display: grid;
    place-items: center;
    width: 54px;
    height: 52px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.buttonFill};
    cursor: pointer;
`;

export const ThemeIcon = styled.img`
    transform: rotate(90deg);
    width: 24px;
    height: 20px;
    filter: invert(${({ theme }) => theme.colors.loopIcon}%)
`;