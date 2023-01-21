import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const CopyIcon = styled.img`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 16px;
  width: 18px;
  filter: grayscale(100%);
  &:hover {
    cursor: pointer;
  }
  @media only screen and ${breakpoint.device.xs} {
    right: 21px;
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

export const TooltipHolder = styled.div`
  .tooltip {
    height: 16px;
    width: 18px;
    position: relative;
    left: 86px;
  }

  .tooltip .tooltiptext {
    display: none;
    width: 120px;
    background-color: #555555;
    color: #ffffff;
    text-align: center;
    border-radius: 6px;
    padding: 5px;
    position: absolute;
    z-index: 1;
    bottom: 40px;
    left: 19px;
    margin-left: -75px;
    opacity: 0;
    transition: opacity 0.3s;
    @media only screen and ${breakpoint.device.xs} {
      left: -3px;
    }
    @media only screen and ${breakpoint.device.sm} {
    }
    @media only screen and ${breakpoint.device.lg} {
    }
  }

  .tooltip .tooltiptext::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: #555555 transparent transparent transparent;
  }

  .tooltip:hover .tooltiptext {
    display: block;
    opacity: 1;
  }
`;
