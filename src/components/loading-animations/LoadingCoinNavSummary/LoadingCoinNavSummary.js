import React from "react";
import {
  Wrapper,
  DataSkeleton
} from "./LoadingCoinNavSummary.styles";

const LoadingCoinNavSummary = (props) => {
  return (
    <>
      <Wrapper>
        <DataSkeleton />
        <DataSkeleton />
        <DataSkeleton />
        <DataSkeleton />
        <DataSkeleton />
        <DataSkeleton />
      </Wrapper>
    </>
  );
};

export default LoadingCoinNavSummary;
