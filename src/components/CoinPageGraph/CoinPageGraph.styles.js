import styled from "styled-components";
import NoGraphImage from "../../images/NoGraph.svg"

export const GraphCointaner = styled.div`
  width: 1519px;
  height: 220px;
  margin-left: -16px;
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
  background-image:url(${NoGraphImage})
`;
