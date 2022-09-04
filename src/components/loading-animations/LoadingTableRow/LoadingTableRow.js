import React from "react";
import {
  Wrapper,
  RankSkeleton,
  NameSkeleton,
  PriceSkeleton,
  PercentSkeleton,
  GraphSkeleton
} from "./LoadingTableRow.styles";

const LoadingTableRow = (props) => {
  return (
    <Wrapper>
      <RankSkeleton />
      <NameSkeleton />
      <PriceSkeleton />
      <PriceSkeleton />
      <PriceSkeleton />
      <PriceSkeleton />
      <PercentSkeleton />
      <PercentSkeleton />
      <GraphSkeleton />
    </Wrapper>
  );
};

export default LoadingTableRow;
