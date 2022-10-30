import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const SearchBarStyle = styled.div`
  width: 406px;
  height: 53px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
  }
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

export const InputType = styled.input`
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


