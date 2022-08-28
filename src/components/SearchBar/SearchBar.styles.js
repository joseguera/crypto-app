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

export const DropDownList = styled.div`
    position: absolute;
    width: 392.5px;
    top: 50px;
    left: 0.02px;
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
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    padding: 8px;
    border-radius: 5px;
    &:hover {
        background: ${({ theme }) => theme.colors.menuHover};
        cursor: pointer;
    }
`;

export const SubOne = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

export const SubTwo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const NoResults = styled.span`
  color: #FE1040;
`;