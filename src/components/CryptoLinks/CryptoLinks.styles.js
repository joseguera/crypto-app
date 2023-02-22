import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const LinkHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  gap: 13px;
  @media only screen and ${breakpoint.device.xs} {
    margin-bottom: 32px;
    flex-direction: column;
    align-content: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-bottom: 0px;
    flex-direction: row;

  }
  @media only screen and ${breakpoint.device.lg} {
    margin-bottom: 0px;
    flex-direction: row;

  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 275px;
  height: 41px;
  padding: 0px 45px;
  border-radius: 10px;
  @media only screen and ${breakpoint.device.xs} {
    width: 228px;
    height: 52px;
    background: ${({ theme }) => theme.colors.mobileFooter};
  }
  @media only screen and ${breakpoint.device.sm} {
    background: ${({ theme }) => theme.colors.background};

  }
  @media only screen and ${breakpoint.device.lg} {
    background: ${({ theme }) => theme.colors.background};

  }
`;

export const Site = styled.a`
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
  max-width: 150px;
  white-space: nowrap
`;

export const LinkIcon = styled.img`
  width: 11px;
  height: 11px;
  position: absolute;
  left: 13px;
  bottom: 15px;
  filter: invert(${({ theme }) => theme.colors.loopIcon}%);
  @media only screen and ${breakpoint.device.xs} {
    bottom: 21px;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;