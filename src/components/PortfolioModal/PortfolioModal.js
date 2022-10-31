import React, { useState } from "react";
import { CryptoTitleIcon, PortfolioSearchBar, CryptoAmountInput, CryptoDateInput } from "components";
import {
  ModalBackground,
  ModalContainer,
  ModalBody,
  TitleHolder,
  TitleItems,
  Title,
  Cross,
  CrossImg,
  ModalUtilities,
  UtilityHolder,
  Utilities,
  FormHolder,
  Buttons
} from "./PortfolioModal.styles";
import cross from "../../images/metro-cross.svg";
import blank from "../../images/blank.png";

export default function PortfolioModal(props) {

  const [cryptoIcon, setCryptoIcon] = useState({ name: "", symbol: "", thumbnail: blank });

  const handleSelection = (name, symbol, thumbnail) => {
    setCryptoIcon({ name, symbol, thumbnail })
  }

  return (
    <>
      <ModalBackground />
      <ModalContainer>
        <ModalBody>
          <TitleHolder>
            <TitleItems>
              <Title>Select Coins</Title>
              <Cross onClick={() => props.closeModal()}>
                <CrossImg src={cross} alt="close x" />
              </Cross>
            </TitleItems>
          </TitleHolder>
          <ModalUtilities>
            <UtilityHolder>
              <CryptoTitleIcon
                profile={{ name: cryptoIcon.name, symbol: cryptoIcon.symbol }}
                image={cryptoIcon.thumbnail}
              />
              <Utilities>
                <FormHolder>
                  <PortfolioSearchBar handleSelection={handleSelection} />
                </FormHolder>
                <FormHolder>
                  <CryptoAmountInput />
                </FormHolder>
                <FormHolder>
                  <CryptoDateInput />
                </FormHolder>
              </Utilities>
            </UtilityHolder>
          </ModalUtilities>
          <Buttons>
            <div className="button close-button" onClick={() => props.closeModal()}>Close</div>
            <div className="button save-button">Save and Continue</div>
          </Buttons>
        </ModalBody>
      </ModalContainer>
    </>
  );
}
