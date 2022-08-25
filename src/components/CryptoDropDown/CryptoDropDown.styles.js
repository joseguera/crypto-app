import styled from "styled-components";

export const DropDownHolder = styled.div`
    border: none;
    cursor: pointer;
    width: 200px;
`;

export const DropDown = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    position: relative;
`;

export const CryptoTitle = styled.h2`
    font-size: 17px;
    line-height: 120%;
`;

export const Arrow = styled.div`
    width: 0px;
    height: 0px;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid ${({ theme }) => theme.colors.text};
`;

export const DropDownList = styled.div`
    position: absolute;
    top: 180px;
    left: 75.96px;
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.buttonFill};
    padding: 8px;
    border-radius: 10px;
    place-items: center;
    gap: 2px;
    box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
    z-index: 10;
`;

export const ListItem = styled.div`
    width: 100%;
    padding: 2px 2px 2px 8px;
    border-radius: 10px;
    &:hover {
        background: ${({ theme }) => theme.colors.menuHover};
    }
`;