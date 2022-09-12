import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const TableGrid = styled.div`
  display: grid;
  justify-items: stretch;
  align-items: center;
  column-gap: 5px;
  row-gap: 10px;
  grid-template-areas: "main main main main main main main main main";
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  width: 1256px;
  padding: 17px;
  @media only screen and ${breakpoint.device.xs} {
    margin-top: 55px;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-top: 0px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-top: 0px;
  }
`;

export const TableHeader = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const TableHeadings = styled.div`
  grid-column: 1 / 10;
`;
