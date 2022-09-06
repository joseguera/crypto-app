import styled from "styled-components";
import breakpoint from "../styles/breakpoints";

export const FooterHolder = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  gap: 25px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.appBackground};
`;

export const ImageLink = styled.a`
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
    display: inline-block;
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
    display: none;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: none;
  }
`;
