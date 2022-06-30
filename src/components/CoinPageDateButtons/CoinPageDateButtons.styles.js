import styled from "styled-components";

export const DateHolder = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 47px;
    margin-bottom: 22px;
`;

export const DateButton = styled.div`
  cursor: pointer;
  height: 34px;
  width: 34px;
  color: #FFFFFF;
  display: grid;
  border-radius: 5px;
  place-items: center;
`;

export const RadioButtonHolder = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`;

export const RadioButtonSelected = styled.div`
    height: 22px;
    width: 22px;
    border: 1px solid rgb(0, 255, 95);
    border-radius: 50%;
    background: rgb(0, 255, 95);
    box-shadow: rgb(0 255 95 / 25%) 0px 0px 0px 5px;
    cursor: pointer;
`;

export const RadioButton = styled.div`
    height: 22px;
    width: 22px;
    border: 1px solid rgb(0, 255, 95);
    border-radius: 50%;
    background: none;
    cursor: pointer;
`;

export const ButtonLabel = styled.label`
    line-height: 0px;
`;

