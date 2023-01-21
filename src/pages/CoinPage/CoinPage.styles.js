import styled from "styled-components";
import breakpoint from "components/styles/breakpoints";

export const CoinPageMain = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    justify-content: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
    justify-items: center;
    gap: 40px;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    justify-items: center;
    gap: 40px;
  }
`;

export const SummaryHolder = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    margin-left: 178px;
    margin-right: 151px;
  }
  @media only screen and ${breakpoint.device.lg} {
    margin-left: 178px;
    margin-right: 151px;
  }
`;

export const PageTitle = styled.div`
  margin-top: 32px;
  margin-bottom: 32px;
  @media only screen and ${breakpoint.device.xs} {
    margin-left: 47px;
  }
  @media only screen and ${breakpoint.device.sm} {

  }
  @media only screen and ${breakpoint.device.lg} {

  }
`;

export const PageText = styled.p`
  font-size: 22px;
  line-height: 0%;
`;

export const SummaryContainer = styled.div`
  display: flex;
  gap: 60px;
  place-items: center;
  @media only screen and ${breakpoint.device.xs} {
    flex-direction: column;
    gap: 19px;
  }
  @media only screen and ${breakpoint.device.sm} {
    flex-direction: row;
    width: 1102px;
  }
  @media only screen and ${breakpoint.device.lg} {
    flex-direction: row;
    width: 1102px;
  }
`;

export const DescriptionHolder = styled.div`
  @media only screen and ${breakpoint.device.xs} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
    justify-items: center;
    width: 1102px;
    margin-left: 12%;
    margin-right: 10%;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    justify-items: center;
    width: 1102px;
    margin-left: 12%;
    margin-right: 10%;
  }
`;

export const GraphHolder = styled.div`
  @media only screen and ${breakpoint.device.xs} {
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
    place-items: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    place-items: center;
  }
`;

export const ConverterHolder = styled.div``;

export const GraphContainer = styled.div`
  @media only screen and ${breakpoint.device.xs} {
  }
  @media only screen and ${breakpoint.device.sm} {
    display: grid;
    place-items: center;
  }
  @media only screen and ${breakpoint.device.lg} {
    display: grid;
    place-items: center;
  }
`;

export const CoinPageGraph = styled.div`
@media only screen and ${breakpoint.device.xs} {
  height: 220px;
}
@media only screen and ${breakpoint.device.sm} {
  width: 1519px;
  height: 220px;
}
@media only screen and ${breakpoint.device.lg} {
  width: 1519px;
  height: 220px;
}
`;
