import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const GraphGrid = styled.div`
display: flex;
  @media only screen and ${breakpoint.device.xs} {
    gap: 10px;
    flex-direction: row;
    flex-flow: row wrap;
    align-items: center;
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
  width: 602px;
  height: 359px;
  padding: 13px;
  position: relative;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background};
  @media only screen and ${breakpoint.device.xs} {
    width: 265px;
    height: 215px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 602px;
    height: 359px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 602px;
    height: 359px;
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
  @media only screen and ${breakpoint.device.xs} {
    display: grid;
    position: absolute;
    left: 36px;
    top: 244px;
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
    height: 132px;
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
