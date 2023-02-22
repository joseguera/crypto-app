import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const TableFiltersHolder = styled.div`
  grid-column: 1 / 10;
  padding-bottom: 17px;
  @media only screen and ${breakpoint.device.xs} {
    display: none;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: unset;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: unset;
  }
`;

export const TableFilterCategories = styled.div`
  display: flex;
  padding-left: 21px;
  padding-right: 21px;
  flex-wrap: wrap;
  align-items: start;
  gap: 16px;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, .2);
  height: 47px;
`;

export const CategoryHolder = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;