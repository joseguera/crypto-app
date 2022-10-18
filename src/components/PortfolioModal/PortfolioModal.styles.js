import styled from "styled-components";

export const ModalBackground = styled.div`
  width: 1519px;
  height: 713px;
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10;
  animation: 1s ease-out 0s 1 normal none running grDYJ;
  cursor: auto;
`;

export const ModalContainer = styled.div`
  position: fixed;
  left: 324.5px;
  top: 155px;
  background: ${({ theme }) => theme.colors.buttonFill};
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  width: 870px;
  height: 403px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 11;
  animation: 0.5s ease-out 0s 1 normal none running dOuzSV;
  cursor: auto;
`;

export const ModalBody = styled.div`
  position: relative;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  justify-content: center;
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 817.5px;
`;

export const TitleItems = styled.div`
  display: flex;
  gap: 292px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 28px;
  line-height: 0%;
  font-weight: bold;
`;

export const Cross = styled.div`
  cursor: pointer;
`;

export const CrossImg = styled.img`
  width: 31px;
  height: 31px;
`;

export const ModalUtilities = styled.div``;

export const UtilityHolder = styled.div`
  display: flex;
  flex-direction: row;
  gap: 41px;
`;

export const Utilities = styled.div`
    display: flex;
    gap: 39px;
    flex-direction: column;
`;

export const FormHolder = styled.form`
  width: 406px;
  height: 53px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 408px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  gap: 16px;
  -webkit-box-align: center;
  align-items: center;
  position: relative;
`;

export const Input = styled.input`
  margin-left: 27px;
  background: none;
  border: none;
  height: 16px;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 25px;
`;
