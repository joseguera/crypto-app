import React from "react";
import {
  Wrapper,
  IconSkeleton,
  AssetHolderSkeleton,
  AssetSkeleton,
  AssetGap,
} from "./LoadingPortfolioAsset.styles";

const LoadingPortfolioAsset = (props) => {
  return (
    <>
      <Wrapper>
        <IconSkeleton />
        <AssetHolderSkeleton>
          <AssetGap />
          <AssetSkeleton />
          <AssetGap />
          <AssetSkeleton />
        </AssetHolderSkeleton>
      </Wrapper>
      <Wrapper>
        <IconSkeleton />
        <AssetHolderSkeleton>
          <AssetGap />
          <AssetSkeleton />
          <AssetGap />
          <AssetSkeleton />
        </AssetHolderSkeleton>
      </Wrapper>
    </>
  );
};

export default LoadingPortfolioAsset;
