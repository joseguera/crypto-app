import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const DateHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 331px;
  height: 43px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.lineGraphBorder};
  @media only screen and ${breakpoint.device.xs} {
    width: 200px;
    height: 32px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 331px;
    height: 43px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 331px;
    height: 43px;
  }
`;

export const DateButton = styled.div`
  cursor: pointer;
  height: 34px;
  width: 34px;
  display: grid;
  border-radius: 5px;
  place-items: center;
  @media only screen and ${breakpoint.device.xs} {
    height: 25px;
    width: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 34px;
    width: 34px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 34px;
    width: 34px;
  }
`;

export const StyledButton = styled.div`
  background-color: #06d554;
  cursor: pointer;
  height: 34px;
  width: 34px;
  display: grid;
  border-radius: 5px;
  place-items: center;
  @media only screen and ${breakpoint.device.xs} {
    height: 25px;
    width: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    height: 34px;
    width: 34px;
  }
  @media only screen and ${breakpoint.device.lg} {
    height: 34px;
    width: 34px;
  }
`;

export const ButtonText = styled.p`
  font-size: 13px;
  font-weight: bold;
  line-height: 0px;
`;
