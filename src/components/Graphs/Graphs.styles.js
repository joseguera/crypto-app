import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const GraphGrid = styled.div`
display: flex;
  @media only screen and ${breakpoint.device.xs} {
    gap: 15px;
    flex-direction: row;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    .visible {
      display: flex;
    }
    .not-visible {
      display: none;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    flex-flow: row wrap;
    column-gap: 34px;
    margin: 0;
    .visible {
      display: flex;
    }
    .not-visible {
      display: flex;
    }
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    flex-flow: row wrap;
    column-gap: 34px;
    .visible {
      display: flex;
    }
    .not-visible {
      display: flex;
    }
  }
`;

export const GraphCell = styled.div`
  flex-direction: column;
  align-items: center;
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  @media only screen and ${breakpoint.device.xs} {
    width: 270px;
    height: 198px;
    padding: 13px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 588px;
    height: 359px;
    padding: 20px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 588px;
    height: 359px;
    padding: 20px;

  }
`;

export const GraphHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const DateButtonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 331px;
  height: 43px;
  border-radius: 10px;
  z-index: 999;
  @media only screen and ${breakpoint.device.xs} {
    display: grid;
    position: absolute;
    left: 44px;
    top: 230px;
    width: fit-content;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    position: static;
    width: fit-content;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
    position: static;
    width: fit-content;
  }
`;

export const ChartHolder = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    width: 234px;
    height: 110px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 520px;
    height: 220px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 520px;
    height: 220px;
  }
`;
