import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const MainDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.appBackground};
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 25px;
    width: 100%;
    padding-bottom: 85px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 74px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-top: 74px;
  }
`;

export const AssetContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and ${breakpoint.device.xs} {
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    padding-right: 25px;
  }
  @media only screen and ${breakpoint.device.sm} {
    gap: 35px;
    justify-content: center;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    gap: 35px;
    justify-content: center;
    align-items: center;
  }
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
    width: 318px;
    height: 52px;
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
  display: flex;
  @media only screen and ${breakpoint.device.xs} {
    justify-content: flex-start;
    width: 100%;
  }
  @media only screen and ${breakpoint.device.sm} {
    align-self: flex-start;
  }
  @media only screen and ${breakpoint.device.lg} {
    align-self: flex-start;
  }
`;

export const Title = styled.h2`
  @media only screen and ${breakpoint.device.xs} {
    font-size: 16px;
    line-height: 0px;  
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: 22px;
    line-height: 0px;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: 22px;
    line-height: 0px;
  }
`;
