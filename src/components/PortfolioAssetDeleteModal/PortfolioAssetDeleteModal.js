import React from "react";

import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  Cross,
  CrossImg,
  AssetPreview, Buttons
} from "./PortfolioAssetDeleteModal.styles";
import cross from "../../images/metro-cross.svg";

export default function PortfolioAssetDeleteModal({
  openDeleteModal,
  currentCoin,
  deleteAsset
}) {
  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalBody>
          <TitleHolder>
            <TitleItems>
              <Title>Delete Asset</Title>
              <Cross onClick={() => openDeleteModal()}>
                <CrossImg src={cross} alt="close x" />
              </Cross>
            </TitleItems>
          </TitleHolder>
          <p>
            Are you sure you want to permanently remove this portfolio asset?
          </p>
          <AssetPreview>
            <img src={currentCoin.image} alt={currentCoin.id} />
            <div>{currentCoin.name}</div>
            <div>{currentCoin.symbol.toUpperCase()}</div>
          </AssetPreview>
          <Buttons>
            <div
              className="button close-button"
              onClick={() => openDeleteModal()}
            >
              Cancel
            </div>
            <div
              className="button delete-button"
              onClick={() => {
                // dispatch(updatePortfolio(portfolioTransaction));
                openDeleteModal();
                deleteAsset(currentCoin)
              }}
            >
              Yes, delete asset
            </div>
          </Buttons>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
