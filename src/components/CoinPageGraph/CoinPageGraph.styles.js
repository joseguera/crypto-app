import styled from "styled-components";
import NoGraphImage from "../../images/NoGraph.svg";
import breakpoint from "components/styles/breakpoints";

export const GraphCointaner = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    height: 220px;
    margin-left: -16px;
    padding-bottom: 80px;
    .graph-style {
      display: block;
      height: 230px !important;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1519px;
    height: 220px;
    margin-left: -16px;
    .graph-style {
      width: 1526.8px !important;
      display: block;
      height: 230px !important;
    }
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1519px;
    height: 220px;
    margin-left: -16px;
    .graph-style {
      width: 1526.8px !important;
      display: block;
      height: 230px !important;
    }
  }
`;

export const GraphDataHolder = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 auto;
`;

export const NoGraph = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1519px;
  height: 200px;
  margin-top: 20px;
  font-size: 22px;
  font-weight: 600;
  background-image: url(${NoGraphImage});
  @media only screen and ${breakpoint.device.xs} {
    width: 100%;
    height: 250px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 1519px;
    height: 200px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 1519px;
    height: 200px;
  }
`;
