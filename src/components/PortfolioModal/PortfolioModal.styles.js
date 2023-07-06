import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ModalBackground = styled.div`
  background: black;
  opacity: 0.5;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 999;
  animation: 1s ease-out 0s 1 normal none running grDYJ;
  cursor: auto;
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
    height: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
    height: 100%;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
    height: 100%;
  }
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 155px;
  background: ${({ theme }) => theme.colors.buttonFill};
  box-shadow: rgb(0 0 0 / 30%) 0px 19px 38px, rgb(0 0 0 / 22%) 0px 15px 12px;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  z-index: 999;
  animation: 0.5s ease-out 0s 1 normal none running dOuzSV;
  cursor: auto;
  @media only screen and ${breakpoint.device.xs} {
    top: 75px;
    width: 318px;
    height: 675px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 870px;
    height: 450px;
    padding-bottom: 18px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 870px;
    height: 450px;
    padding-bottom: 18px;
  }
`;

export const ModalBody = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
  justify-content: center;
  @media only screen and ${breakpoint.device.xs} {
    padding-top: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    padding-top: 18px;
  }
  @media only screen and ${breakpoint.device.lg} {
    padding-top: 18px;
  }
`;

export const TitleHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 817.5px;
  @media only screen and ${breakpoint.device.xs} {
    width: 285px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 817.5px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 817.5px;
  }
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
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: inherit;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: inherit;
  }
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
  gap: 41px;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    width: 318px;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    width: 653px;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    width: 653px;
  }
`;

export const Utilities = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${breakpoint.device.xs} {
    gap: 20px;
  }
  @media only screen and ${breakpoint.device.sm} {
    gap: 39px;
  }
  @media only screen and ${breakpoint.device.lg} {
    gap: 39px;
  }
`;

export const FormHolder = styled.form`
  height: 53px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  @media only screen and ${breakpoint.device.xs} {
    width: 242px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 406px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 406px;
  }
`;

export const Form = styled.div`
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
  padding-top: 16px;
  padding-bottom: 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
  }
  @media only screen and ${breakpoint.device.xs} {
    width: 242px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 100%;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  padding-bottom: 24px;
  flex-direction: row;
  .button {
    height: 48px;
    width: 235px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    line-height: 0%;
    font-weight: bold;
    cursor: pointer;
  }
  .close-button {
    color: ${({ theme }) => theme.colors.portfolioText};
    background: ${({ theme }) => theme.colors.portfolioBackground};
  }
  .save-button {
    color: ${({ theme }) => theme.colors.text};
    background: ${({ theme }) => theme.colors.portfolioButton};
  }
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    .button {
      width: 242px;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    .button {
      width: 235px;
    }
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    .button {
      width: 235px;
    }
  }
`;
