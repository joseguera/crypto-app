import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const NextArrow = styled.div`
  width: 0px;
  height: 0px;
  border-width: 10px;
  border-style: solid;
  border-color: transparent rgb(255, 255, 255) transparent transparent;
  display: none;
  @media only screen and ${breakpoint.device.xs} {
    display: block;
  }
`;
