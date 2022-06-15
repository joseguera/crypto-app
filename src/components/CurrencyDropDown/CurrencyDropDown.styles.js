import styled from "styled-components";

export const DropDown = styled.div`
    border: none;
    cursor: pointer;
    width: 76px;
    height: 36px;
`;

export const DropDownList = styled.div`
    position: absolute;
    z-index: 10;
    background: #2C2F36;
    color: #FFFFFF;
    width: 76px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const DownArrow = styled.div`
    width: 0px;
    height: 0px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #00FF5F;
`;

export const CurrencyButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2C2F36;
    justify-content: space-around;
    border-radius: 10px;
`;

export const CurrencyNameHolder = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2C2F36;
    justify-content: space-around;
`;

export const Symbol = styled.div`
    border-radius: 50%;
    background-color: #191B1F;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CurrencySymbol = styled.div`
    color: #00FF5F;
    font-size: 12px;
    font-weight: bold;
`;

export const CurrencyName = styled.p`
    font-size: 12px;
    font-weight: bold;
`;