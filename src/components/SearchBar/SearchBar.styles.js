import styled from "styled-components";

export const SearchBarStyle = styled.div`
    width: 408px;
    height: 50px;
    background: ${({ theme }) => theme.colors.buttonFill};
    border-radius: 10px;
    display: flex;
    gap: 16px;
    align-items: center;
    position: relative;
`;

export const LoopIcon = styled.img`
    margin-left: 20px;
    height: 20px;
    width: 20px;
    filter: invert(${({ theme }) => theme.colors.loopIcon}%)
`;

export const InputType = styled.input`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
    background: none;
    width: 100%;
    padding-top: 16px;
    padding-bottom: 16px;
    border: none;
    font-weight: bold;
    &:focus {
        outline: none;
    }
    &::placeholder {
        color: ${({ theme }) => theme.colors.text};
    }
`;