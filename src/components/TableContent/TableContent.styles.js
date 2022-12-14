import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const IconHolder = styled.div`
display: flex;
@media only screen and ${breakpoint.device.xs} {
  flex-direction: row;
  align-items: center;
}
@media only screen and ${breakpoint.device.sm} {
  flex-direction: row;
}
@media only screen and ${breakpoint.device.lg} {
  flex-direction: row;
}
`;

export const Icon = styled.img`
  margin-right: 10px;
  vertical-align: middle;
  @media only screen and ${breakpoint.device.xs} {
    width: 40px;
    height: 40px;
  }
  @media only screen and ${breakpoint.device.sm} {
    width: 20px;
    height: 20px;
  }
  @media only screen and ${breakpoint.device.lg} {
    width: 24px;
    height: 24px;
  }
`;

export const PercentCell = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const styledLink = {
  textDecoration: "none",
};

export const LinkText = styled.span`
  .symbol {
    text-transform: uppercase;
  }
  &:hover {
    text-decoration: underline;
  }
  &:active {
    text-decoration: underline;
  }
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    .symbol::before {
      content: ""
    }
    .symbol::after {
      content: ""
    }
    .symbol {
      font-weight: bold;
    }
  }
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    flex-direction: row;
    .symbol::before {
      content: "("
    }
    .symbol::after {
      content: ")"
    }
    .symbol {
      font-weight: normal;
    }
  }
  @media only screen and ${breakpoint.device.lg} {
    display: flex;
    flex-direction: row;
    .symbol::before {
      content: "("
    }
    .symbol::after {
      content: ")"
    }
    .symbol {
      font-weight: normal;
    }
  }
`;

export const Text = styled.span`
  margin-right: 5px;
  @media only screen and ${breakpoint.device.xs} {
    font-size: 14px;
  }
  @media only screen and ${breakpoint.device.sm} {
    font-size: inherit;
  }
  @media only screen and ${breakpoint.device.lg} {
    font-size: inherit;
  }
`;

export const TableLine = styled.span`
  border-top: 1px solid #dcdcdc;
  grid-column: 1 / 10;
`;
