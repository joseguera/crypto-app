import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const GraphCointainer = styled.div`
@media only screen and ${breakpoint.device.xs} {
    .graph-style {
        width: 279px !important;
        height: 120px !important;
      }
}
@media only screen and ${breakpoint.device.sm} {
    .graph-style {
        width: 597px !important;
        height: 283px !important;
      }
}
@media only screen and ${breakpoint.device.lg} {
    .graph-style {
        width: 597px !important;
        height: 283px !important;
      }
}
`;
