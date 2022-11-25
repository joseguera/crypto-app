import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

export const FooterHolder = styled.div`
  // height: 75px;
  display: flex;
  width: 100%;
  -webkit-box-align: end;
  align-items: end;
`;

export const DesktopFooter = styled.div`
  height: 75px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.appBackground};
  width: 100%;
  gap: 25px;
  @media only screen and ${breakpoint.device.xs} {
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    position: static;
    display: flex;
  }
`;

export const MobileFooter = styled.div`
  height: 75px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.appBackground};
  width: 100%;
  gap: 25px;
  @media only screen and ${breakpoint.device.xs} {
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
  }
  @media only screen and ${breakpoint.device.sm} {
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
  }
  @media only screen and ${breakpoint.device.lg} {
    position: static;
    display: none;
  }
`;

export const ImageLink = styled.a`
  padding-top: 8px;
  &:hover {
    cursor: pointer;
  }
`;

export const IconImage = styled.img`
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
  height: 40px;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: inline-block;
  }
`;

export const MobileIconImage = styled.img`
  height: 40px;
  @media only screen and ${breakpoint.device.xs} {
    display: inline-block;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: inline-block;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;

export const styledLink = {
  textDecoration: "none",
};
