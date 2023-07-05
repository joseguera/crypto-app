import React from "react";
import { useDispatch } from "react-redux";
import { deletePortfolioAsset } from "../../features/portfolio/portfolioSlice";

import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  ModalText,
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
  const dispatch = useDispatch();

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
          <ModalText>
            Are you sure you want to permanently remove this portfolio asset?
          </ModalText>
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
                dispatch(deletePortfolioAsset(currentCoin));
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
