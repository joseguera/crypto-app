import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const MainDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 74px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-top: 74px;
    width: 1291px;
  }
`;

export const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  justify-content: center;
  align-items: center;
`;

export const AssetBtnHolder = styled.div`
  display: grid;
  justify-self: center;
  place-items: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.text};
  background: #06d554;
  cursor: pointer;
  @media only screen and ${breakpoint.device.xs} {
    width: 331px;
    height: 50px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 405px;
    height: 61px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 405px;
    height: 61px;
  }
`;

export const AssetBtnText = styled.div`
  font-weight: bold;
  line-height: 120%;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 14px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 20px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 20px;
  }
`;

export const TitleHolder = styled.div`
  align-self: flex-start;
`;

export const Title = styled.h2`
  font-size: 22px;
  line-height: 0px;
`;
