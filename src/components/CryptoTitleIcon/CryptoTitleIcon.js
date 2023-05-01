import React, { useState } from "react";
import { PortfolioEditBar } from "components";
import {
  CryptoTitle,
  CryptoContent,
  CryptoIcon,
  CryptoImg,
  CryptoName,
  CryptoText,
  Symbol,
} from "./CryptoTitleIcon.styles";

export default function CryptoTitleIcon({ image, profile, openModal, openDeleteModal, getCurrentCoin }) {
  const [showEdit, setShowEdit] = useState(false);
  function editAsset() {
    setShowEdit(true);
  }

  function leaveAsset() {
    setShowEdit(false);
  }
  return (
    <CryptoTitle onMouseOver={() => editAsset()} onMouseOut={() => leaveAsset()}>
      <CryptoContent>
        <CryptoIcon>
          <CryptoImg src={image} alt={profile.name} />
        </CryptoIcon>
        <CryptoName>
          <CryptoText>
            <span>
            {profile.name}
            {profile.name.length > 7 && (
              <>
                <br />
              </>
            )}
            </span>
            <Symbol>{profile.symbol.length !== 0 && ` (${profile.symbol})`}</Symbol>
            </CryptoText>
        </CryptoName>
            {/* PortfolioEditBar is only displayed when the CryptoTileIcon component is not inside the PortfolioModal */}
            {/* {openModal && <PortfolioEditBar profile={profile} openModal={openModal} openDeleteModal={openDeleteModal} getCurrentCoin={getCurrentCoin} showEdit={showEdit} />} */}
      </CryptoContent>
    </CryptoTitle>
  );
}
