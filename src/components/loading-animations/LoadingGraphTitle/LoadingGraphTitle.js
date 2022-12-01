import React from "react";
import {
  Wrapper,
  TopDataSkeleton,
  MiddleDataSkeleton,
  BottomDataSkeleton
} from "./LoadingGraphTitle.styles";

const LoadingGraphTitle = (props) => {
  return (
    <>
      <Wrapper>
        <TopDataSkeleton />
        <MiddleDataSkeleton />
        <BottomDataSkeleton />
      </Wrapper>
    </>
  );
};

export default LoadingGraphTitle;
