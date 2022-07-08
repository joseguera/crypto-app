import styled from "styled-components";

export const DropDown = styled.div`
    border: none;
    cursor: pointer;
`;

export const DropDownList = styled.div`
    position: absolute;
    z-index: 10;
    background: #2C2F36;
    color: #FFFFFF;
    width: 85px;
    height: 50px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    text-align: center;
`;

export const CurrencyButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2C2F36;
    justify-content: space-around;
    border-radius: 10px;
    height: 50px;
    width: 85px;
`;

export const CurrencyItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #2C2F36;
    justify-content: space-around;
`;

export const CurrencyOptions = styled.div`
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