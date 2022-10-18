import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 30.5px;
  left: 324.5px;
  background: ${({ theme }) => theme.colors.buttonFill};
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  width: 870px;
  height: 403px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 11;
  animation: 0.5s ease-out 0s 1 normal none running dOuzSV;
`;

export const ModalBody = styled.div`
  position: relative;
  padding-top: 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 42px;
  justify-content: center;
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 817.5px
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

export const ModalUtilities = styled.div`

`;

export const UtilityHolder = styled.div`

`;

export const Utilities = styled.div`

`;
