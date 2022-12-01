import React from "react";
import {
  Wrapper,
  DataHolderSkeleton,
  DataOneHolderSkeleton,
  DataOneTopSkeleton,
  DataOneBottomSkeleton,
  DataTwoSkeleton,
  DataThreeSkeleton,
  DataFourSkeleton,
} from "./LoadingCoinPage.styles";

const LoadingCoinPage = (props) => {
  return (
    <Wrapper>
      <DataHolderSkeleton>
        <DataOneHolderSkeleton>
          <DataOneTopSkeleton />
          <DataOneBottomSkeleton />
        </DataOneHolderSkeleton>
        <DataTwoSkeleton />
        <DataThreeSkeleton />
      </DataHolderSkeleton>
      <DataFourSkeleton />
    </Wrapper>
  );
};

export default LoadingCoinPage;
