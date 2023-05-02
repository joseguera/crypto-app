import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 18.4px;
  margin-top: 6px;
  padding: 4px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonFill};
    border-radius: 5px;
  }
  @media only screen and ${breakpoint.device.xs} {
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
  button {
    transition: all .3s;
    &:hover {
      transform: scale(1.25);
    }
  }
`;

export const UpdateText = styled.p`
  font-size: 12px;
  font-weight: bold;
  @media only screen and ${breakpoint.device.xs} {
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;

export const UpdateDate = styled.span`
  font-weight: normal;
  @media only screen and ${breakpoint.device.xs} {
  }
  @media only screen and ${breakpoint.device.sm} {
  }
  @media only screen and ${breakpoint.device.lg} {
  }
`;
