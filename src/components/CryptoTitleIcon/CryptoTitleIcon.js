import React from "react";
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

export default function CryptoTitleIcon({ image, profile, openModal, openDeleteModal }) {
  return (
    <CryptoTitle>
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
            <PortfolioEditBar openModal={openModal} openDeleteModal={openDeleteModal} />
      </CryptoContent>
    </CryptoTitle>
  );
}
